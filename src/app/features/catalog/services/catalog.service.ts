import { Injectable } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { User } from '../../../model/user';

@Injectable({
    providedIn: 'root'
})

export class CatalogService {

    constructor(private http: HttpClient) {

    }

  usersEndpoint = 'http://localhost:3000/users';

  getAll() {
    return this.http.get<User[]>(this.usersEndpoint).subscribe((res)=>{
      return res;
    });
  }

  save(fValue: any) {
    console.log("🚀 ~ fValue", fValue);
    this.http.post<User>(this.usersEndpoint, fValue).subscribe((res) => {
      this.add(res)
      //todo reset form
    });    
  }

  deleteUser(idToRemove: number) {
    this.http.delete<User>(this.usersEndpoint).subscribe((res) => {
      console.log("🚀 ~ res", res);
      this.remove(idToRemove);
    });
  }

  /* store region*/

  users: User[] = [];

  init(users: User[]) {
    this.users = users;
  }  

  add(user: User) {
    //this.users.push(f.value);
    //it is better to use the spread operator to add elements
    this.users = [...this.users, user ];
    //const users = JSON.parse(JSON.stringify(this.users))
  }

  remove(id: number) {
    //const index = this.users.findIndex((user)=> user.id === idToRemove);
    //better way sometimes: desctructuring
    //const index = this.users.findIndex(({ id })=> id === idToRemove);
    //splice is a mutable approach =C
    //so it is better to use ... TBD

    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1);
  }
  
}