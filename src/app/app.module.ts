import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { DetailComponent } from './detail/detail.component';
import { EpisodeComponent } from './episode/episode.component';

import { ApiService } from './_services/api.service';
import { DrinkService } from './_services/show.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,   
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    ShowComponent,
    DetailComponent,
    EpisodeComponent
  ],
  providers: [
    ApiService,
    DrinkService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
