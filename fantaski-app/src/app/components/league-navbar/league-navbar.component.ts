import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { AreYouSureComponent } from './are-you-sure/are-you-sure.component';

@Component({
  selector: 'app-league-navbar',
  templateUrl: './league-navbar.component.html',
  styleUrls: ['./league-navbar.component.css']
})
export class LeagueNavbarComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    // #docregion focus-restoration
    const dialogRef = this.dialog.open(AreYouSureComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    // dialogRef.afterClosed().subscribe(() => {      } 
    // #enddocregion focus-restoration
  }
}
