import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CrisisListComponent } from "./crisis-list/crisis-list.component";
// import { HeroListComponent } from "../app/heroes/hero-list/hero-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "crisis-center", component: CrisisListComponent },
  // { path: "heroes", component: HeroListComponent }, deleted because there yet is in heroes-routing.modules
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, //<-- debugging puposes only
    ),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
