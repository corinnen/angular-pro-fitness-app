import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth', 
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCkqCPfSq4gQgT6dWMxpn9quKVpZzt4ihg",
    authDomain: "fitness-app-9927b.firebaseapp.com",
    databaseURL: "https://fitness-app-9927b.firebaseio.com",
    projectId: "fitness-app-9927b",
    storageBucket: "fitness-app-9927b.appspot.com",
    messagingSenderId: "448893622377",
  }; 

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}