import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BooksComponent } from './pages/books/books.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', redirectTo:'users', pathMatch: 'full'},
  { path :'users', component: UsersComponent},
  {path:'books', component: BooksComponent},
  {path:'books/:id', component: BooksComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

