import { Component, OnInit } from '@angular/core';

import { User } from './../../_models';
import { UserService } from './../../_services';

@Component({
	moduleId: module.id,
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
	users: User[] = [];

	constructor(private userService: UserService) { }

	ngOnInit() {
		if (this.userService.loggedIn()) {
			this.loadAllUsers();
		}
	}

	deleteUser(id: number) {
		if (this.userService.loggedIn()) {
			this.userService.delete(id).subscribe(() => this.loadAllUsers());
		}
	}

	private loadAllUsers() {
		this.userService.getAll().subscribe(users => this.users = users);
	}
}
