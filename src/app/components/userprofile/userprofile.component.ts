import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  constructor(private _authService : AuthService) {
    this.accountName = _authService.getUser().email
  }

  @Output() themeEmit = new EventEmitter<boolean>()

  loading = false;
  accountName = ""
  theme = ""
  isChecked = false;

  onChange(value: MatSlideToggleChange) {

  }

  logout() {
    this.loading = true;
    this._authService.logoutUser().then(() => {
      this.loading = false;
    })
  }
}
