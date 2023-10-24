import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./page/category/category.component";
import {PageComponent} from "./page/page.component";
import {AllPostComponent} from "./page/all-post/all-post.component";
import {NewPostComponent} from "./page/new-post/new-post.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path: '', component: PageComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'categories', component: CategoryComponent, canActivate:[AuthGuard]},

  {path: 'posts', component: AllPostComponent, canActivate:[AuthGuard]},
  {path: 'post/new', component: NewPostComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
