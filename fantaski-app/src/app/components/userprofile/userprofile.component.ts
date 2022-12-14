import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  constructor(private _authService : AuthService) {}

  loading = false;

  logout() {
    this.loading = true;
    this._authService.logoutUser().then(() => {
      this.loading = false;
    })
  }
}
