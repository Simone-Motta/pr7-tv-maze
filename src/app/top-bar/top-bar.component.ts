import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { ApiService } from '../_services/api.service';
import { DrinkService } from '../_services/show.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  shows: any = []
  search: string = ''

  constructor(private apiService: ApiService, private drinkService: DrinkService, private router: Router) {}

  ngOnInit() {
  }

  // searchByShowName(showName: string) {
  //   this.drinkService.getElencoShow(showName).subscribe( (response: any) => {
  //       console.log(response)
  //       this.shows = response;
  //   });
  // }

  passNomeShow(name: string) {
    this.router.navigate(['/home', name])
    console.log("Nome passato")
  }
}