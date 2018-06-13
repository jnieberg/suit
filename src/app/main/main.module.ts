import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { routing } from './../app.routes';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error/404/404.component';
import { CurrentUserDirective } from '../_directives/current-user.directive';

const declex = [
	HomeComponent,
	LoginComponent,
	RegisterComponent,
	HeaderComponent,
	FooterComponent,
	Error404Component,
	CurrentUserDirective
];

@NgModule({
	imports: [
		routing,
		CommonModule,
		FormsModule,
		SharedModule,
		ReactiveFormsModule
	],
	exports: [
		CommonModule,
		FormsModule,
		...declex
	],
	declarations: [
		...declex
	]
})
export class MainModule {
	constructor() { }
}
