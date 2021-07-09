import { Routes } from '@angular/router';
import {EmptyComponent} from './empty/empty.component'
import {Form1Component} from './form1/form1.component'


export const crmRoutes: Routes = [
    { path: '', redirectTo: 'dispatch', pathMatch: 'full'},
    { path: 'empty', component: EmptyComponent},
    { path: 'form1', component: Form1Component},
];
