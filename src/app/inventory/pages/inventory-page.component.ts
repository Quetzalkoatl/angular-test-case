import { Component } from '@angular/core';
import { InventoryPageService } from '../services';

@Component({
    selector: 'app-inventory-page',
    templateUrl: './inventory-page.component.html',
    styleUrls: ['./inventory-page.component.less'],
    providers: [InventoryPageService],
})
export class InventoryPageComponent {}
