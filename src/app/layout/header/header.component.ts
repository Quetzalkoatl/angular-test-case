import { Component, OnInit } from '@angular/core';
// import { IUser } from '../models/user.model';
// import { UserService } from '../services/user.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
    // user: IUser = {
    //     firstName: '',
    //     lastName: '',
    // };
    // successMessage: boolean = false;
    // hideMessageCountdown: number = 30000;
    // constructor(private readonly userService: UserService) {}
    // ngOnInit(): void {
    //     this.userService.user$.subscribe((user) => {
    //         this.user = user;
    //         if (
    //             this.user.firstName.length > 4 &&
    //             this.user.lastName.length > 4
    //         ) {
    //             this.successMessage = true;
    //             setTimeout(() => {
    //                 this.successMessage = false;
    //             }, this.hideMessageCountdown);
    //         } else {
    //             this.successMessage = false;
    //         }
    //     });
    // }
    // closeError() {
    //     this.user.firstName = '';
    //     this.user.lastName = '';
    // }
}
