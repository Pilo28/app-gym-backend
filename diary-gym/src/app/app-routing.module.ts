import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  	{path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)},
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
