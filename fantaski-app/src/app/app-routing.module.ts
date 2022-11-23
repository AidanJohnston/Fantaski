import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { NegateAuthGuard } from './guards/auth/negate-auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LeagueComponent } from './pages/league/league.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
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
  },
  {
    path: 'profile',
    children: [
      {
        path: ':username',
        component: ProfileComponent,
        canActivate: [NegateAuthGuard]
      }
    ]
  },
  {
    path: 'league',
    children: [
      {
        path: ':leaguename',
        component: LeagueComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
