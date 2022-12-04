import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueNavbarComponent } from './components/league-navbar/league-navbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NegateAuthGuard } from './guards/auth/negate-auth.guard';
import { CreateLeagueComponent } from './pages/create-league/create-league.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { LeagueComponent } from './pages/league/league.component';
import { LoginComponent } from './pages/login/login.component';
import { MatchupComponent } from './pages/matchup/matchup.component';
import { PlayersComponent } from './pages/players/players.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'how-to-play',
        component: HowToPlayComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        children: [
          {
            path: 'l',
            children: [
              {
                path: ':leaguename',
                component: LeagueNavbarComponent,
                children: [
                  {
                    path: '',
                    component: LeagueComponent,
                    canActivate: [AuthGuard],
                  },
                  {
                    path: 'team',
                    component: TeamComponent,
                    canActivate: [AuthGuard]
                  },
                  {
                    path: 'matchup',
                    component: MatchupComponent,
                    canActivate: [AuthGuard]
                  },
                  {
                    path: 'players',
                    component: PlayersComponent,
                    canActivate: [AuthGuard]
                  },
                  {
                    path: 'events',
                    component: EventsComponent,
                    canActivate: [AuthGuard]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        path: 'u',
        children: [
          {
            path: ':username',
            component: ProfileComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 's',
        component: SearchComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'create-league',
    component: CreateLeagueComponent,
  },

  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [NegateAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NegateAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
