import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLayoutComponent } from './frontend/components/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './backend/components/backend-layout/backend-layout.component';



const routes: Routes = [

  {
    path: '',
    component: FrontendLayoutComponent,
    loadChildren: () => import('./frontend/frontend.module')
    .then(m=> m.FrontendModule)
  },
  {
    path: 'admin',
    component: BackendLayoutComponent,
    loadChildren: () => import('./backend/backend.module')
    .then(m=> m.BackendModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full' // Default route
   
  },
  /*
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  */

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
