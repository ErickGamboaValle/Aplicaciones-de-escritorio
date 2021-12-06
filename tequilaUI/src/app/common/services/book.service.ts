import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Book } from '../datatypes/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private libros:Book[] = [
  //   { title: 'Cementerio de Animales'},
  //   { title: 'Percy Jackson'},
  //   { title: 'El Libro Troll'},
  //   { title: 'El camino de los Reyes'},
  // ];

  constructor(private httpClient: HttpClient) { }

  getBooks(): Promise<any> {
    const url = environment.apiUrl + '/albums';
    return this.httpClient.get(url).toPromise();
  }
  
  getBooksFromUser(id:string): Promise<any>{
    const url = environment.apiUrl + '/albums?userId=' + id;
    return this.httpClient.get(url).toPromise();
  }
}

