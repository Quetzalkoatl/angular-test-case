import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('app/pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'inventory',
        loadChildren: () =>
            import('app/pages/inventory/inventory.module').then(
                (m) => m.InventoryModule
            ),
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('app/pages/reports/reports.module').then(
                (m) => m.ReportsModule
            ),
    },
    {
        path: 'billing',
        loadChildren: () =>
            import('app/pages/billing/billing.module').then(
                (m) => m.BillingModule
            ),
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('app/pages/profile/profile.module').then(
                (m) => m.ProfileModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
