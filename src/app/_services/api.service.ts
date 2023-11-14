import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	 providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    /**
     * API RICERCA SHOW PER NOME
     * 
     * @param showName 
     * @returns richiesta Api per nome
     */
    searchByShowName(showName: string) {
        return this.http.get('https://api.tvmaze.com/search/shows?q=' + showName)
    }

    /**
     * API RICERCA SHOW PER ID
     * 
     * @param id 
     * @returns richiesta Api per id
     */
    searchById(id: number) {
        return this.http.get('https://api.tvmaze.com/shows/' + id)
    }

    /**
     * API RICERCA EPISODI SHOW PER ID
     * 
     * @param id 
     * @returns richiesta Api per id
     */
    searchEpisodeById(id: number) {
        return this.http.get('https://api.tvmaze.com/shows/' + id + '/episodes')
    }

}