import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
 MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
 MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { GithubformComponent } from './githubform/githubform.component';
import { PowerupcardComponent } from './powerupcard/powerupcard.component';
 
//import { TableComponent } from './table/table.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    GithubformComponent,
    PowerupcardComponent,
    
    //TableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
     
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
