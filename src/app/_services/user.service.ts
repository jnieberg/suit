import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) { }

	loggedIn(): User {
		return <User>JSON.parse(localStorage.getItem('currentUser'));
	}

	getAll(): Observable<User[]> {
		return <Observable<User[]>>this.http.get<User[]>('/api/users');
	}

	getById(id: number): Observable<User> {
		return <Observable<User>>this.http.get('/api/users/' + id);
	}

	create(user: User): Observable<User> {
		return <Observable<User>>this.http.post('/api/users', user);
	}

	update(user: User): Observable<User> {
		return <Observable<User>>this.http.put('/api/users/' + user.id, user);
	}

	delete(id: number): Observable<User> {
		return <Observable<User>>this.http.delete('/api/users/' + id);
	}
}
