import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/models/user.model';
import { UserService } from 'services/user.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
    user: IUser = {
        firstName: "User's",
        lastName: 'Initials',
        phone: '+75555555',
    };

    successMessageStatus: boolean = false;

    errorMessageStatus: boolean = false;

    hideErrorMessageCountdown: number = 30000;

    constructor(private readonly userService: UserService) {}

    ngOnInit(): void {
        this.getUserData();
    }

    getUserData() {
        this.userService.user$.subscribe((user) => {
            this.user = user;
            if (
                this.user.firstName.length > 4 &&
                this.user.lastName.length > 4
            ) {
                this.successMessageStatus = true;
                this.errorMessageStatus = false;
                setTimeout(() => {
                    this.successMessageStatus = false;
                }, this.hideErrorMessageCountdown);
            } else {
                this.successMessageStatus = false;
                this.errorMessageStatus = true;
            }
        });
    }

    closeError() {
        this.errorMessageStatus = false;
    }
}
