import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { homeComponent }   from '../homeComponent/home.component';
import { loginComponent } from '../loginComponents/login.component';
import { numberRoutingComponent } from '../numberRoutingComponents/number-routing.component';

const routes: Routes = [
 {
    path: 'home',
    component: homeComponent
  },
   {
    path: '',
    component: loginComponent
  },
    {
    path: 'login',
    component: loginComponent
  },
      {
    path: 'number-routing',
    component: numberRoutingComponent
  },
  { path: '**', 
    component: loginComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

