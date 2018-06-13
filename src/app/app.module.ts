import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { ProfileComponent } from './main/profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		MainModule,
		SharedModule, // .forRoot()
		RouterModule.forRoot(routes),
		HttpClientModule,
		BrowserAnimationsModule
	],
	providers: [
		AuthGuard,
		AlertService,
		AuthenticationService,
		UserService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtInterceptor,
			multi: true
		},

		// provider used to create fake backend
		fakeBackendProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
