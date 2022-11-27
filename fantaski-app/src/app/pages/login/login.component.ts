import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _authService: AuthService, private _router : Router) { } 

  isLoading = false;
  isError = false;
  hide = true;
  formDisabled = false

  isAuthError = false;

onSubmit(login: NgForm){
    this.isLoading = true;
    this.isError = false
    this.isAuthError = false;
    this._authService.loginUserWithPassword(login.value['email'], login.value['password']).then(res => {
      if(res){
        this.isLoading = false;
        this._router.navigate(['']);
      }
      else{
        this.isError = true;
        this.isLoading = false;
        login.reset();
      }
    });
  }
  
  async googleLogin() {
    this.formDisabled = true;
    this.isError = false;
    this.isAuthError = false;
    this._authService.googleAuth().then((res) => {
      if(res){
        this._router.navigate([''])
      }
      else {
        this.formDisabled = false
        this.isAuthError = true
      }
    })
}
}
