import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { DrinkService } from '../_services/drink.service';

import { Drink } from '../model/drink.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  shows: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private drinkService: DrinkService, private router: Router) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const showIdString = params.get('idShow')
      console.log(showIdString)

      if (showIdString) {
        const showId = parseInt(showIdString)
        this.drinkService.getDetailShow(showId).subscribe((response: any) => {
          console.log(response);
          this.shows = response
          console.log()
        })  
      }
    
    })

  }

  viewEpisodeList(id: number) {
    this.router.navigate(['/episode', id])
    console.log("Id2 passato")
  }

}