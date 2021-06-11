import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(private httpClient:HttpClient) { }

  authenticate(username: string, password: string) {   
    return this.httpClient.get<User>(`http://localhost:8080/login/${username}/${password}`).pipe(
      map(user => {
        sessionStorage.setItem('username', user.username)
        
      })
    );    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>("http://localhost:8080/registration", user);
  }
}
