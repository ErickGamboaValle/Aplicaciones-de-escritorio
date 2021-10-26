import { Component } from '@angular/core';

interface Book {
  title:string;
  author?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Francisco';

  books:Array<Book> = [];

  bookTitle: string = "";

  constructor() {
    setTimeout(() => {
      this.name = 'Juan Perez';
    }, 5000);
  }

  doOnClick(e: any) {
    console.log('Hiciste click en el boton.', e);
    this.books.push({title:this.bookTitle})
  }

  setValue(e: any) {
    console.log('Presionaste una tecla!', e);
    this.bookTitle = e.target.value;
  }
}
