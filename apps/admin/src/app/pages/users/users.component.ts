import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';

import { UsersService } from '@cluntor/users'
import { User } from "@cluntor/users";

@Component({
  selector: 'admin-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit{
  users: User[] =[];

  constructor(
    private usersService: UsersService,
    private route: Router,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(data => {
        this.users = data
    })
  }

  redirectToAddNew(){
    this.route.navigateByUrl('/users/new')
  }

  updateUser(id: string){
    this.route.navigateByUrl(`/users/new/${id}`);
  }

  deleteUser(id: string){
    this.usersService.deleteUser(id).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Delete User Successfully',
      });
      this.getUsers()
    })
  }
}