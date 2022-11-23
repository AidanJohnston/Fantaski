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

onSubmit(login: NgForm){
    this.isLoading = true;
    this._authService.loginUserWithPassword(login.value['email'], login.value['password']).then(res => {
      if(res){
        this.isLoading = false;
      }
      else{
        this.isError = true;
        this.isLoading = false;
        login.reset();
      }
    });
  }
}
