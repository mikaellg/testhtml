import { Routes } from '@angular/router';
import { BasicLayoutComponent } from './components/common/layouts/basicLayout.component';
import { AuthService } from './services/guards/auth.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { CrmModuleGuard } from './services/guards/crm-guard.service';

  export const ROUTES: Routes = [
    {
      path: '', component: BasicLayoutComponent,
      children: [
        { path: '', redirectTo: 'sales', pathMatch: 'full' },
        { path: 'store', component: BasicLayoutComponent},
      ]
    },
    {
      path: 'app', component: BasicLayoutComponent, canActivate: [AuthService],
      children: [
        { path: '', redirectTo: 'sales', pathMatch: 'full' },
        { path: 'user', loadChildren: () => import('./modules/dashboards/dashboards.module').then(m => m.DashboardsModule),canActivate: [AuthService] },
        { path: 'crm', loadChildren: () => import('./modules/crm/crm.module').then(m => m.CrmModule), canActivate: [CrmModuleGuard] },

        { path: '404', component: NotfoundComponent },
        { path: '**', component: NotfoundComponent }
      ]
    }
  ];
