import { Component } from '@angular/core';
import { ReportsPageService } from '../services';

@Component({
    selector: 'app-reports-page',
    templateUrl: './reports-page.component.html',
    styleUrls: ['./reports-page.component.less'],
    providers: [ReportsPageService],
})
export class ReportsPageComponent {}
