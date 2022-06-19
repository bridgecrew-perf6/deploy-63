import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl = 'https://angular-shopium.herokuapp.com/user';
  constructor(private httpClient:HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{message:string,users:any}>(`${this.userUrl}/api/myusers`);
  }
  // signup
  signup(user:any){
    
    
    return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`, user);
  }
  // login
  login(user:any){  
    return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/login`, user);
  }

  getUserById(id:string){
    // api/users/5
    return this.httpClient.get<{user:any}>(`${this.userUrl}/${id}`);  }

  deleteUser(id:string) {
    return this.httpClient.delete(`${this.userUrl}/${id}`); }

  editUser(user:any){
    return this.httpClient.patch<{message:string}>(`${this.userUrl}/${user._id}`, user);
  }

}
