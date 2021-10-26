import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/common/datatypes/book';
import { BookService } from 'src/app/common/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  titulo:string = '';
  isError: boolean = false;
  isLoading: boolean = false;
  libros:Array<Book> = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.bookService.getBooks()
    .then(response => {
      this.libros = response;
      this.isError = false;
      this.isLoading = false;
    })
    .catch(error => {
      this.isError = true;
      this.isLoading = false;
    });
  }

  saveBook() {
    if(!this.titulo) return;
    this.libros.push({
      title: this.titulo
    });
    this.titulo = "";
  }

}
