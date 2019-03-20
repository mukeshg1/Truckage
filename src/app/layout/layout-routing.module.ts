import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            // {
            //     path: '**',
            //     redirectTo: 'not-found',
            //     pathMatch: 'full'
            // },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },
            {
                path: 'driver',
                loadChildren: './driver/driver.module#DriverModule'
            },
            {
                path: 'trips',
                loadChildren: './trips/trips.module#TripsModule'
            },
            {
                path: 'feedback',
                loadChildren: './feedback/feedback.module#FeedbackModule'
            },
            {
                path: 'truck',
                loadChildren: './truck/truck.module#TruckModule'
            },
            {
                path: 'changepassword',
                loadChildren: './changepassword/changepassword.module#ChangepasswordModule'
            },
            // {
            //     path: 'not-found',
            //     loadChildren: '../not-found/not-found.module#NotFoundModule'
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
