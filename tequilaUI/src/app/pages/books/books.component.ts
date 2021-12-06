import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

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
  userId:string = '';

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Parametros: ', params);
      this.userId = params.id;
      this.getBooksFromUser();
    });
  }

  ngOnInit(): void {
    if(!this.userId){
    this.isLoading = true;
    this.bookService.getBooks()
    .then((response:Book[]) => {
      this.libros = response;
      this.isError = false;
      this.isLoading = false;
    })
    .catch((error:any) => {
      this.isError = true;
      this.isLoading = false;
    });
  }
}

  getBooksFromUser(){
    this.isLoading = true;
    this.bookService.getBooksFromUser(this.userId).then(response => {
      this.libros = response;
      this.isError = false;
      this.isLoading = false;
    }).catch(e=>{
      console.log('Algo salio mal');
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
