import { Component } from '@angular/core';
import { ProfilePageService } from '../services';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.less'],
    providers: [ProfilePageService],
})
export class ProfilePageComponent {}
