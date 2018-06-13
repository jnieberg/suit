import { Component } from '@angular/core';
import { User } from '../../_models';
import { AuthenticationService } from '../../_services';

@Component({
	selector: 'suit-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	user: User;

	constructor(private authenticationService: AuthenticationService) { }

	logout() {
		this.authenticationService.logout();
		window.location.href = '/';
	}
}
