import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./page/category/category.component";
import {PageComponent} from "./page/page.component";
import {AllPostComponent} from "./page/all-post/all-post.component";
import {NewPostComponent} from "./page/new-post/new-post.component";

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'categories', component: CategoryComponent},

  {path: 'posts', component: AllPostComponent},
  {path: 'post/new', component: NewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
