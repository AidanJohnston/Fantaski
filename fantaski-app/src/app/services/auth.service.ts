import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public firebaseAuth : AngularFireAuth,
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  get isLoggedIn() : boolean {
    return JSON.parse(localStorage.getItem('user') ?? "null") != null;
  }
  
 async loginUserWithPassword(email: string, password: string) : Promise<boolean> {
  let success = false;
  await this.afAuth.signInWithEmailAndPassword(email, password)
    .then((res) =>{
      success = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    })
    .catch(err => {
      success = false;
    });
    return success;
  }

  async createUserWithPassword(email: string, password: string) : Promise<boolean>{
    var success = false;

    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
          if(res.user != null){
            this.sendVerificationEmail()
            success = true;
          }
          else{
            success = false;
          }
        })
      .catch(err => {
        success = false;
      });
      return success;
    }

  // Auth logic to run auth providers
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }


  async googleAuth() : Promise<boolean>{
    this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      return true;
    }).catch((err) => {
      return false;
    });
    return false;
  }

  async logoutUser(){
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  async sendVerificationEmail() {
    if(!this.isUserEmailVerified) {
      this.firebaseAuth.currentUser
        .then(user => {
          user?.sendEmailVerification();
      })
    }
  }
  get isUserEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user') ?? "null");

    if(user != null)
      return user.emailVerified;
    else
      return false;
  }
}
