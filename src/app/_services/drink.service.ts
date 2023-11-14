import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
	 providedIn: 'root',
})

export class DrinkService {
    constructor(private apiService: ApiService) {}

    getElencoShow(name: string) {
        return this.apiService.searchByShowName(name)
    }

    getDetailShow(id: number) {
        return this.apiService.searchById(id)
    }

    getEpisodeShow(id: number) {
        return this.apiService.searchEpisodeById(id)
    }

}