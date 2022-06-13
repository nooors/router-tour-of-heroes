import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "heroes", component: HeroListComponent },
  { path: "hero/:id", component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //<-- outside main route app we ues forChild not forRoot
  exports: [RouterModule],
})
export class HeroeRoutingModule {}
