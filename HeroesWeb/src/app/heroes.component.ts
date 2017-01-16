import { Component, Optional, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  title = 'Angular 2 Material App with CLI';

  isDarkTheme: boolean = false;
  lastDialogResult: string;

  selectedHero: Hero;
  heroes: Hero[];

  noHeroes: boolean = false;

  errorMessage: any;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.checkData(heroes), error => this.errorMessage = <any>error);
    console.log("Heroes:" + this.heroes);
    console.log(`Error: ${this.errorMessage}`)
  }

  checkData(data: Hero[]) {
    if (data === undefined || data.length === 0) {
      this.noHeroes = true;
    } else {
      this.heroes = data;
    }
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.Id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private router: Router, private heroService: HeroService) { }

}