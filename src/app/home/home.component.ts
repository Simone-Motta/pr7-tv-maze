import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../_services/api.service';
import { DrinkService } from '../_services/show.service';

import { Drink } from '../model/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  shows: any = []
  search: string = ''

  constructor(private apiService: ApiService, private drinkService: DrinkService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      const showName = params.get('nomeShow')
      console.log(showName)

      if (showName)
        this.searchByShowName(showName)
    })
  }

  searchByShowName(showName: string) {
    this.drinkService.getElencoShow(showName).subscribe( (response: any) => {
        console.log(response)
        this.shows = response;
    });
  }

  viewDetail(id: number) {
    this.router.navigate(['/show', id])
    console.log("Id passato")
  }
  
}