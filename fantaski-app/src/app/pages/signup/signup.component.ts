import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private _authService : AuthService,
    private _router : Router) { }

  text = "";
  color = "warn";
  value = 0;

  isLoading = false;
  isError = false;

  hide = true;
  hide_confirm = true;

  lock = true;

  private passwordStrengths = [
    {
      "text": "Very Weak",
      "color": "warn",
      "value": 10
    },
    {
      "text": "Weak",
      "color": "warn",
      "value" : 25
    },
    {
      "text": "Weak",
      "color": "warn",
      "value" : 50
    },
    {
      "text": "Medium",
      "color": "accent",
      "value" : 75
    },
    {
      "text": "Strong",
      "color": "primary",
      "value" : 100
    }
  ]

  onPasswordChange(password: string) {
    const num : number = this.checkPasswordStrength(password);
    this.text = this.passwordStrengths[num]['text'];
    this.color = this.passwordStrengths[num]['color'];
    this.value = this.passwordStrengths[num]['value'];
  }

  onPasswordConfirmChange(password : string, password_confirm : string) {
    this.lock = password != password_confirm
  }

  public checkPasswordStrength(password : string) : number {

    let hasLower = new RegExp('(?=.*[a-z])');
    let hasUpper = new RegExp('(?=.*[A-Z])');
    let hasSpecial = new RegExp('(?=.*[^A-Za-z0-9])');
    let moreThanEight = new RegExp('(?=.{8,})');
    let lessThanSix = new RegExp('(?=.{,6})');

    var strength : number = Number(hasLower.test(password)) + 
      Number(hasUpper.test(password)) + 
      Number(hasSpecial.test(password)) + 
      Number(moreThanEight.test(password));

    if(lessThanSix.test(password)){
      strength = 1;
    }
    return strength;
  }

  onSubmit(signup : NgForm) {
    this.isLoading = true;

    const user = {
    };

    this._authService.createUserWithPassword(signup.value['email'], signup.value['password']).then(res => {
      if(res) {
        this.isLoading = false;
        //this.router.navigate(['verify-email']);
      }
      else {
        this.isLoading = false;
        this.isError = true;
      }
    });
  }
}
