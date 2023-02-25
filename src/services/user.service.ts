import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from 'app/models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    user$ = new Subject<IUser>();

    changeUser(user: IUser) {
        this.user$.next(user);
    }
}
