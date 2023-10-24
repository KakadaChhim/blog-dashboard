import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {HeaderComponent} from "./components/header/header.component";
import {PageComponent} from "./page/page.component";
import {CategoryComponent} from "./page/category/category.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AllPostComponent} from "./page/all-post/all-post.component";
import {NewPostComponent} from "./page/new-post/new-post.component";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {LoginComponent} from "./auth/login/login.component";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm72R-TE68Do2agAyZ2dicQEByA7T-WzA",
  authDomain: "ang-blog-4a279.firebaseapp.com",
  projectId: "ang-blog-4a279",
  storageBucket: "ang-blog-4a279.appspot.com",
  messagingSenderId: "493534911624",
  appId: "1:493534911624:web:c25a4cc19c920f08e6133d"
};

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    PageComponent,
    CategoryComponent,
    AllPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    FormsModule,
    AngularEditorModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
