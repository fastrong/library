import { Component, OnInit } from '@angular/core';

import { ApiService } from "../api.service"

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private books

  constructor( private api : ApiService ) {
    var that = this
    this.api.apiLoaded.then( function(){
      that.books = that.api.getData( "books" )
    })
  }

  ngOnInit() {
  }

  removeBook( i ){
    var that = this
    this.api.apiLoaded.then( function(){
      var books = that.api.getData( "books" )
      books.splice( i, 1 )
      that.api.saveData( "books", books )
      that.books = books
    })
  }
}
