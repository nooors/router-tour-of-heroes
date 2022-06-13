import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { MessageService } from "../../message.service";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.css"],
})
export class HeroListComponent implements OnInit {
  selectedId = 0;

  heroes$!: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get("id")!, 10);
        return this.heroService.getHeroes();
      }),
    );
  }
}
