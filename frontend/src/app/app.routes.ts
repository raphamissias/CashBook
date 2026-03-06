import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Contributors } from './pages/contributors/contributors';
import { Purposes } from './pages/purposes/purposes';
import { MainLayout } from './layout/main-layout/main-layout';

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
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'contributors', component: Contributors },
      { path: 'purposes', component: Purposes },
    ],
  },
];
