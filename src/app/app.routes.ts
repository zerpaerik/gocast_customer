import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'services',
    children: [
      {
        path: 'request',
        loadComponent: () => import('./features/services/service-form/service-form.component').then(m => m.ServiceFormComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'roadside',
        loadComponent: () => import('./features/services/sub-services/sub-services.component').then(m => m.SubServicesComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'roadside/tow',
        loadComponent: () => import('./features/services/service-request-form/service-request-form.component').then(m => m.ServiceRequestFormComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'roadside/tire',
        loadComponent: () => import('./features/services/service-request-form/service-request-form.component').then(m => m.ServiceRequestFormComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'roadside/battery',
        loadComponent: () => import('./features/services/service-request-form/service-request-form.component').then(m => m.ServiceRequestFormComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'roadside/fuel',
        loadComponent: () => import('./features/services/service-request-form/service-request-form.component').then(m => m.ServiceRequestFormComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'roadside/locksmith',
        loadComponent: () => import('./features/services/service-request-form/service-request-form.component').then(m => m.ServiceRequestFormComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'request-detail',
        loadComponent: () => import('./features/services/service-request-detail/service-request-detail.component').then(m => m.ServiceRequestDetailComponent),
        canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard]
  }
];
