import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { ApiService } from '../_services/api.service';
import { DrinkService } from '../_services/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {

    viewDetailFlag: boolean = true;
    viewEpisodeFlag: boolean = false;

    constructor(private apiService: ApiService, private drinkService: DrinkService, private router: Router) {}  

    ngOnInit() {
    }   

    viewDetail() {
        this.viewDetailFlag = true;
        this.viewEpisodeFlag = false;
    } 

    viewEpisode() {
        this.viewDetailFlag = false;
        this.viewEpisodeFlag = true;
    } 

    // passNomeShow(name: string) {
    //   this.router.navigate(['/home', name])
    //   console.log("Nome passato")
    // }
}