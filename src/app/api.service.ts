import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
  public apiLoaded : Promise<any>
  private loadApi : { ok : Function, notok : Function } = {
    ok : null,
    notok : null
  }

  private files = [
    {
      fileName : "books.json",
      storageKey : "books"
    },
    {
      fileName : "authors.json",
      storageKey : "authors"
    }
  ]

  constructor( private http : HttpClient ) {
    var that = this
    this.apiLoaded = new Promise( function( ok, notok ){
      that.loadApi.ok = ok
      that.loadApi.notok = notok
    })
    var download = function( file ){
      that.http.get( `assets/api/${file.fileName}` ).subscribe( ( response : Object ) =>{
        console.log( `Saving response to storageKey = ${file.storageKey}` )
        that.saveData( file.storageKey, response )
        if( that.checkDone() ) that.loadApi.ok()
      })
    }
    for( let ind = 0; ind < this.files.length; ind++ ){
      var file = this.files[ ind ]
      if( localStorage.getItem( file.storageKey ) === null ){
        download( file )
      }
      else{
        console.log( `Item ${ file.storageKey } loaded` )
        if( that.checkDone() ){
          that.loadApi.ok()
          console.log( "Found in localStorage as well" )
        }
      }
    }
  }

  checkDone(){
    var isDone = true
    for(var ind = 0; ind < this.files.length; ind++){
      var file = this.files[ ind ]
      isDone = isDone && localStorage.getItem( file.storageKey ) !== null
    }
    return isDone
  }
  getData( key : string ){
    return JSON.parse( localStorage.getItem( key ) )
  }
  saveData( key : string, data : Object, update? : Boolean ){
    var update = typeof update === 'undefined' ? false : update;
    if( update ){
      var currData = localStorage.getItem( key ) !== null ? JSON.parse( localStorage.getItem( key ) ) : {}//if item not yet save, default it to {}
      var data : Object = Object.assign( currData, data )
    }
    localStorage.setItem( key, JSON.stringify( data ) )
  }
}
