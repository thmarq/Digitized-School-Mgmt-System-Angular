import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFormComponent } from './admin-form/admin-form.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AdminFormComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'admin',
    component: AdminFormComponent,
    pathMatch: 'full'

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
