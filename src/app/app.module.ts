import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TrophyComponent } from './trophy/trophy.component';
import { SearchComponent } from './search/search.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ContactComponent,
    HomeComponent,
    CategoryComponent,
    TrophyComponent,
    SearchComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
