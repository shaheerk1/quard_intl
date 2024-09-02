import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor() { }

  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  private allUsersSubject = new BehaviorSubject<User[] | null>(null);
  public allUsers$ = this.allUsersSubject.asObservable();

  updateAllUsers(users: User[]) {
    this.allUsersSubject.next(users);
  }

  updateUser(user: User) {
    this.userSubject.next(user);
  }

  getThisUser(){  
    return this.user$
  }
}
