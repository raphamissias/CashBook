import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Contributors } from './pages/contributors/contributors';
import { Purposes } from './pages/purposes/purposes';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: '',
    component: Home,
  },
  {
    path: 'contributors',
    component: Contributors,
  },
  {
    path: 'purposes',
    component: Purposes,
  },
];
