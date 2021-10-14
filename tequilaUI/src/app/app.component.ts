import { Component } from '@angular/core';

  interface Book{
    title:string;
    author?:string;
  };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string='Erick';

  books:Array<any>=[];

  bookTitle: string="";

  constructor(){
    setTimeout(()=>{
      this.name = 'Not Erick';
    },2000);
  }

  doOnClick(e:any){
    console.log('Hiciste click', e);
    this.books.push({title:this.bookTitle})
  };

  setValue(e:any){
    console.log('Presionaste una tecla',e)
    this.bookTitle= e.target.value;
  };
}
