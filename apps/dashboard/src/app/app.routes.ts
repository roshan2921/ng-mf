import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
