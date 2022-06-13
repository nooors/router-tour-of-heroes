import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { Observable } from "rxjs";
@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined;
  hero$!: Observable<Hero>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
  ) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get("id")!)),
    );
  }
  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // if the url bring a parameter it is passed if not, is null, so this is an optional paramater

    //include a junk 'foo' property for fun - you can see it in the url -
    this.router.navigate(["/heroes", { id: heroId, foo: "foo" }]);
  }
}
