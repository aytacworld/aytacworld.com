import type { Routes } from '@angular/router';
import { AboutPage } from './views/about/about.page';
import { ContactPage } from './views/contact/contact.page';
import { HomePage } from './views/home/home.page';
import { ServicesPage } from './views/services/services.page';
import { NotFoundPage } from './views/static/not-found.page';
import { PrivacyPage } from './views/static/privacy.page';
import { TermsPage } from './views/static/terms.page';

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
    path: 'privacy',
    component: PrivacyPage,
  },
  {
    path: 'terms',
    component: TermsPage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
