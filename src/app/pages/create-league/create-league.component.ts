import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent {

  constructor(private _formBuilder: FormBuilder) {}

  leaguename = " "

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  onLeagueNameChanged(leagueName : string) {
    this.leaguename = leagueName.replaceAll(" ", "-")
  }
}
