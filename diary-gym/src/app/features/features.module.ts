import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EntryItemComponent } from './components/entry-item/entry-item.component';
import { ListEntriesComponent } from './components/list-entries/list-entries.component';
import { NewItemButtonComponent } from './components/new-item-button/new-item-button.component';


@NgModule({
  declarations: [HomeComponent, EntryItemComponent, ListEntriesComponent, NewItemButtonComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
