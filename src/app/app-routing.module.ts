import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookEditComponent } from "./book-edit/book-edit.component"
import { BookListComponent } from "./book-list/book-list.component"
import { BookViewComponent } from "./book-view/book-view.component"

const routes: Routes = [
  {
    path : "",
    pathMatch : "full",
    redirectTo : "bookList"
  },
  {
    path : "bookAdd",
    component : BookEditComponent
  },
  {
    path : "bookEdit/:id",
    component : BookEditComponent
  },
  {
    path : "bookList",
    component : BookListComponent
  },
  {
    path : "bookView/:id",
    component : BookViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
