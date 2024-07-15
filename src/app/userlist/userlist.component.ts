import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit
{
  allusers:any=[];

  constructor(private userService:UserService)
  {

  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData()
  {
    this.userService.getUser().subscribe(user=>this.allusers=user);
  }



 
}
