import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewEntryFormTemplateComponent } from './components/new-entry-form-template/new-entry-form-template.component';
import { NewEntryFormReactiveComponent } from './components/new-entry-form-reactive/new-entry-form-reactive.component';

const routes: Routes = [
  {path:'', component: HomeComponent},

  {
    path: 'new-template',
    component: NewEntryFormTemplateComponent,
  },

  {
    path: 'new-reactive',
    component: NewEntryFormReactiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
