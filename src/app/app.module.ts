import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {FormsModule ,ReactiveFormsModule} from '@angular/Forms';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),

    RouterModule.forRoot([
      { path :'login',component:LoginComponent },
      { path :'register',component:RegisterComponent },
      { path :'home',component:HomeComponent },

    ]) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
