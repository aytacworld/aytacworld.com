import type { Routes } from '@angular/router';
import { AboutPage } from './views/about/about.page';
import { ContactPage } from './views/contact/contact.page';
import { HomePage } from './views/home/home.page';
import { NotFoundPage } from './views/not-found/not-found.page';
import { ServicesPage } from './views/services/services.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'services',
    component: ServicesPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
