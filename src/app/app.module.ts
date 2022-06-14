import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { CrisisListComponent } from "./crisis-list/crisis-list.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeroesModule } from "./heroes/heroes.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, CrisisListComponent, PageNotFoundComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
