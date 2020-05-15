import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'forecast-list',
    loadChildren: () => import('./forecast-list/forecast-list.module').then( m => m.ForecastListModule)
  },
  {
    path: '',
    redirectTo: 'forecast-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
