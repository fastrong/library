import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';

import { ApiService } from "./api.service"
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute } from "@angular/router"

import * as $ from "jquery"

@NgModule({
  declarations: [
    AppComponent,
    BookEditComponent,
    BookListComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
