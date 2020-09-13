import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeConstructorPage } from './home-constructor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeConstructorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeConstructorPageRoutingModule {}
