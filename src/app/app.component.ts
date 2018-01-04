import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  }
  private links = [
    {
      name : "List Books",
      route : "bookList"
    },
    {
      name : "Add Book",
      route : "bookAdd"
    }
  ]
  title = 'app';
}
