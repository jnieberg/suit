import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AlertService {
	private subject = new Subject<any>();
	private keepAfterNavigationChange = false;

	constructor(private router: Router, private snackBar: MatSnackBar) {
		// clear alert message on route change
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				if (this.keepAfterNavigationChange) {
					// only keep for a single location change
					this.keepAfterNavigationChange = false;
				} else {
					// clear alert
					this.subject.next();
				}
			}
		});
	}

	success(message: string, keepAfterNavigationChange = false) {
		this.snackBar.open(message, 'close', {
			verticalPosition: 'top',
			panelClass: 'mat-snackbar-success',
			duration: 4000
		});
		this.keepAfterNavigationChange = keepAfterNavigationChange;
	}

	error(message: string, keepAfterNavigationChange = false) {
		this.snackBar.open(message, 'close', {
			verticalPosition: 'top',
			panelClass: 'mat-snackbar-warn',
			duration: 4000
		});
		this.keepAfterNavigationChange = keepAfterNavigationChange;
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
