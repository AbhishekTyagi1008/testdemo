import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  users=
  [
    {id:1,name:'abhishek'},
    {id:2,name:'angular'},
    {id:3,name:'frontend'}
  ];

  constructor() { }

  getUser()
  {
    return of(this.users);
  }
}
 