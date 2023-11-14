import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DrinkService } from "../_services/drink.service";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-episode',
    templateUrl: './episode.component.html',
  })

export class EpisodeComponent implements OnInit {

    episode: any = [];
    id: number = 0;
    
    constructor(private route: ActivatedRoute, private drinkService: DrinkService, private router: Router) {}

    ngOnInit(): void {

        this.route.paramMap.subscribe(params => {

            const showIdString = params.get('idShow')
            console.log(showIdString)
      
            if (showIdString) {
              const showId = parseInt(showIdString)
              this.id = showId;
              this.drinkService.getEpisodeShow(showId).subscribe((response: any) => {
                console.log(response);
                this.episode = response;
              })  
            }
          
        })
        
    }

    viewDetail(id: number) {
      this.router.navigate(['/detail', id])
      console.log("Id passato")
    }

}

// export class EpisodeComponent implements OnInit {

//     episodesBySeason: Observable<{ [season: number]: any[] }> | undefined;
  
//     constructor(private route: ActivatedRoute, private drinkService: DrinkService, private router: Router) {}
  
//     ngOnInit(): void {

//         this.route.paramMap.subscribe(params => {
            
//             const showIdString = params.get('idShow');
            
//             if (showIdString) {
//                 const showId = parseInt(showIdString);
//                 this.episodesBySeason = this.drinkService.getEpisodeShow(showId).pipe(
//                     map(episodes => this.organizeEpisodesBySeason(episodes))
//                 );
//             }

//         });

//     }
  
//     private organizeEpisodesBySeason(episodes: any = {}): { [season: number]: any[] } {

//       const episodesBySeason: { [season: number]: any[] } = {};
  
//       episodes.forEach((episode: { season: any; }) => {

//         const seasonNumber = episode.season;

//         if (!episodesBySeason[seasonNumber]) {
//           episodesBySeason[seasonNumber] = [];
//         }

//         episodesBySeason[seasonNumber].push(episode);

//       });

//       console.log(episodesBySeason);
//       return episodesBySeason;

//     }

// }
