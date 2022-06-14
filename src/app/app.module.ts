import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeroesModule } from "./heroes/heroes.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CrisisCenterModule } from "./crisis-center/crisis-center.module";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

// The import order of the modules is important because the order of the routes defined in the modules affects route matching. If the AppModule were imported first, its wildcard route (path: '**') would take precedence over the routes defined in CrisisCenterModule.
