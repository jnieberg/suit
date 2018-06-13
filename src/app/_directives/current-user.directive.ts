import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';

@Directive({ selector: '[currentUser]' })
export class CurrentUserDirective implements OnInit {
	@Input() currentUser = true;
	@Output() userE: EventEmitter<User> = new EventEmitter<User>();
	constructor(private element: ElementRef, private userService: UserService) { }

	ngOnInit() {
		const user = this.userService.loggedIn();
		if ((this.currentUser && !user) || (!this.currentUser && user)) {
			this.element.nativeElement.remove();
		}
		this.userE.emit(user);
	}
}
