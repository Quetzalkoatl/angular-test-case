import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from 'app/models/user.model';
import { IDisplayMessages } from 'app/models/displayMessages.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    user$ = new Subject<IUser>();

    messages: IDisplayMessages = {
        success: false,
        error: false,
        countdown: 30000,
    };

    changeUser(user: IUser) {
        user = { ...user, phone: '+7' + user.phone };
        if (user.firstName.length > 4 && user.lastName.length > 4) {
            this.messages.success = true;
            this.messages.error = false;
            setTimeout(() => {
                this.messages.success = false;
            }, this.messages.countdown);
        } else {
            this.messages.success = false;
            this.messages.error = true;
        }

        this.user$.next(user);
    }
}
