import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

import { SharedService } from './sharedService/shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    SearchMovieComponent,
    ListMovieComponent,
    DetailMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
