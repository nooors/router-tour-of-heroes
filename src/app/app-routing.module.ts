import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

// import { CrisisListComponent } from "./crisis-center/crisis-list/crisis-list.component";
// import { HeroListComponent } from "../app/heroes/hero-list/hero-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";
// { path: "crisis-center", component: CrisisListComponent }, this component is managed by crisis-center routing
// { path: "heroes", component: HeroListComponent }, deleted because there yet is in heroes-routing.modules

const appRoutes: Routes = [
  { path: "compose", component: ComposeMessageComponent, outlet: "popup" },
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
