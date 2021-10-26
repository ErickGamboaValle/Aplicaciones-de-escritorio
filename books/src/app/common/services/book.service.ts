import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../datatypes/book';
import { Observable } from 'rxjs';

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

  getItems(): Promise<any> {
    // return new Promise((success, error) => {
    //   setTimeout(() => {
    //     success(this.libros);
    //   }, 2000);
    // });
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return this.httpClient.get(url).toPromise();

  }
}
