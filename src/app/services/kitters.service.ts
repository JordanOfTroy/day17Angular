import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KittersService {

  constructor(
    private http: HttpClient
  ) { }

  // endpoint: string = 'https://http.cat/'
  endpoint: string = 'https://cataas.com'
  // endpoint: string = 'https://meowfacts.herokuapp.com/'
  // endpoint: string = 'https://pokeapi.co/api/v2/';


  getRandoKitter(): Observable<any> {
    return this.http.get<any>(`https://randomfox.ca/floof/`)
    // return this.http.get<any>(`${this.endpoint}/cat`)
  }

}
