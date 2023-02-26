import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDisplayMessages } from 'app/models/displayMessages.model';
import { IUser } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    user: IUser = {
        firstName: "User's",
        lastName: 'Initials',
        phone: '+75555555',
    };

    messages!: IDisplayMessages;

    successMessageStatus: boolean = false;

    errorMessageStatus: boolean = false;

    hideErrorMessageCountdown: number = 30000;

    constructor(private readonly userService: UserService) {}

    ngOnInit(): void {
        this.getUserData();
    }

    ngOnDestroy(): void {
        this.userService.user$.unsubscribe();
    }

    getUserData() {
        this.userService.user$.subscribe((user) => {
            this.user = user;
        });
        this.messages = this.userService.messages;
    }

    closeError() {
        this.messages.error = false;
    }
}
