import { Component } from '@angular/core';
import { IUser } from 'app/models/user.model';
import { UserService } from 'services/user.service';
import { ProfilePageService } from '../services';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.less'],
    providers: [ProfilePageService],
})
export class ProfilePageComponent {
    user!: IUser;

    constructor(private readonly userService: UserService) {}

    onUserUpdate(user: IUser) {
        this.user = { ...user };
        this.userService.changeUser(this.user);
    }
}
