import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var firebaseConfig = {
  apiKey: "AIzaSyCkqCPfSq4gQgT6dWMxpn9quKVpZzt4ihg",
  authDomain: "fitness-app-9927b.firebaseapp.com",
  databaseURL: "https://fitness-app-9927b.firebaseio.com",
  projectId: "fitness-app-9927b",
  storageBucket: "fitness-app-9927b.appspot.com",
  messagingSenderId: "448893622377",
  appId: "1:448893622377:web:dd788c58f32e754f"
};
*/