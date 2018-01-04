import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { ApiService } from "../api.service"
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Author } from "../author"

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {


  private authorsIndex//authors indexed by id
  private authors
  private id : number//book id, if in edit mode
  private books//indexed by id
  private rawBooks
  private bookForm : FormGroup
  private mode : string//edit, or new
  private picker

  constructor( private router : Router, private route : ActivatedRoute, private api : ApiService, private fb : FormBuilder ) { 
    this.api.apiLoaded.then( ( function(){
      this.authors = JSON.parse( localStorage.getItem( "authors" ) )
      this.authorsIndex = {}
      for( var x = 0; x < this.authors.length; x++ ){
        this.authorsIndex[ this.authors[ x ].id ] = this.authors[ x ]
      }
    } ).bind( this ) )
    this.bookForm = this.fb.group({
      ISBN : [ "", [ Validators.required ] ],
      author : [ "", [ Validators.required ] ],
      chapters : this.fb.array([
      ]),
      edition : [ "" ],
      publisher : [ "" ],
      publishingDate : [ "" ],
      title : [ "", [ Validators.required ] ]
    })
  }
  makeChapter(){
    return this.fb.group({
      numberOfPages : [""],
      startPage : [""],
      title : ["", [ Validators.required ] ]
    })
  }
  addChapter( e? ){
    if( typeof e !== 'undefined' ){
      e.stopPropagation()
      e.preventDefault()
    }
    const control = <FormArray>this.bookForm.controls[ "chapters" ]
    control.push( this.makeChapter() )
  }
  removeChapter( i : number ){
    const control = <FormArray>this.bookForm.controls[ "chapters" ]
    control.removeAt( i )
  }
  makeBook( i ){
    return {
      id : i,
      title : this.bookForm.controls.title.value,
      author : this.authorsIndex[ this.bookForm.controls.author.value ],
      publisher : this.bookForm.controls.publisher.value,
      edition : this.bookForm.controls.edition.value,
      ISBN : this.bookForm.controls.ISBN.value,
      publishingDate : ( new Date( this.picker.get() ) ).toISOString(),
      chapters : this.bookForm.controls.chapters.value
    }
  }
  save(e){
    e.preventDefault()
    e.stopPropagation()
    if( this.bookForm.valid ){//if all fields are validated, continue saving
      if( this.mode === "edit" ){//if currently in edit mode, replace the old book with object formed from the form data
        var newBook = this.makeBook( this.id )
        this.books[ this.id ] = newBook
        for( var x in this.rawBooks ) if( this.rawBooks[ x ].id == this.id ) this.rawBooks[x] = newBook
        this.api.saveData( "books", this.rawBooks )
      } else {
        var lastID = 0
        for( var y = 0; y < this.rawBooks.length; y++ ){
          if( lastID < this.rawBooks[ y ].id ) lastID = this.rawBooks[ y ].id * 1
        }
        this.rawBooks.push( this.makeBook( lastID + 1 ) )
        this.api.saveData( "books", this.rawBooks )
      }
    } else {//if user tries to save and form still haven't passed validation, but fields are pristine, reveal all errors by marking them as dirty
      for( var ctrl in this.bookForm.controls ){
        this.bookForm.controls[ ctrl ].markAsDirty()
      }
    }
    this.router.navigateByUrl( "" )
  }
  load(){
    var books = this.api.getData( "books" )
    var indBooks = {}
    for( var x = 0; x < books.length; x++ ){
      var book = books[ x ]
      indBooks[ book.id ] = book
    }
    this.books = indBooks
    this.rawBooks = books
    console.log( this.rawBooks )
  }

  fillIn( bookId ){
    var book = this.books[ bookId ]
    for( var x = 0; x < book.chapters.length; x++ ) this.addChapter()
    var state = {
      ISBN : book.ISBN,
      author : book.author.id,
      chapters : book.chapters,
      title : book.title,
      edition : book.edition,
      publisher : book.publisher,
      publishingDate : book.publishingDate,
      chapter : book.chapters
    }
    this.bookForm.patchValue( state )
    this.picker.set( "select", new Date( book.publishingDate ) )
    $.prototype.bookForm = this.bookForm
  }

  ngOnInit() {
    var $input = (<any>$( "#publishingDate" )).pickadate()
    this.picker = $input.pickadate( "picker" )
    this.route.params.subscribe( ( params => {
      if( typeof params[ 'id' ] !== 'undefined' ){//edit mode, load form values
        this.mode = "edit"
        this.id = params[ 'id' ]
        this.api.apiLoaded.then( ( function(){
          this.load()
          this.fillIn( params[ 'id' ] )
        } ).bind( this ) )
      } else {
        console.log("new mode")
        this.api.apiLoaded.then( ( function(){
          this.load()
        } ).bind( this ) )
        this.mode = "new"
      }
    } ).bind( this ));
  }

}
