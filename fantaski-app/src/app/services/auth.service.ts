import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get isLoggedIn() {
    return false;
  }

  async loginUserWithPassword(email: string, password: string) : Promise<boolean> {
    return true;
  }

   async createUserWithPassword(email: string, password: string) : Promise<boolean>{
    return false; 
  }
}
