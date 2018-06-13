import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { Error404Component } from './main/error/404/404.component';
import { ProfileComponent } from './main/profile/profile.component';

export let routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: '**', component: Error404Component }
];

export const routing = RouterModule.forChild(routes);
