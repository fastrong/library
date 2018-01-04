import { ActivatedRoute } from "@angular/router"
import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service"

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  constructor( private route : ActivatedRoute, private api : ApiService ) {}
  
  private book

  ngOnInit() {
    this.route.params.subscribe( ( params => {
      var books = this.api.getData( 'books' )
      var id = params[ 'id' ]
      for( var x in books ) if( + books[ x ].id === + id ) this.book = books[ x ]
    } ).bind( this ) )
  }

}
