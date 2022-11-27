import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ENVIRONMENT
import { environment } from 'src/environments/environment';

// FIREBASE
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LeagueComponent } from './pages/league/league.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LeagueNavbarComponent } from './components/league-navbar/league-navbar.component';
import { TeamComponent } from './pages/team/team.component';
import { MatchupComponent } from './pages/matchup/matchup.component';
import { PlayersComponent } from './pages/players/players.component';
import { EventsComponent } from './pages/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { CreateLeagueComponent } from './pages/create-league/create-league.component';
import { SearchComponent } from './pages/search/search.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { AreYouSureComponent } from './components/league-navbar/are-you-sure/are-you-sure.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeagueNavbarComponent,
    SearchbarComponent,
    UserprofileComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    LeagueComponent,
    TeamComponent,
    MatchupComponent,
    PlayersComponent,
    EventsComponent,
    CreateLeagueComponent,
    SearchComponent,
    HowToPlayComponent,
    AreYouSureComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    CoolSocialLoginButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
