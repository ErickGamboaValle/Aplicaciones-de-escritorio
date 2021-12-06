import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/datatypes/user';
import { PermisosService } from 'src/app/common/services/permisos.service';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User [] = [];
  permisos: string = '';
  constructor( private userService: UserService, private permisosService: PermisosService) { 
    this.permisos = this.permisosService.getPermiso();
  }

  ngOnInit(): void {
    this.userService.getUsers().then(response =>{
      this.users = response;
    }).catch(e =>{
      console.log('Error ', e)
    })
  }

}
