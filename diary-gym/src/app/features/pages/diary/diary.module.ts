import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { EntryItemComponent } from '../../components/entry-item/entry-item.component';
import { ListEntriesComponent } from '../../components/list-entries/list-entries.component';
import { NewItemButtonComponent } from '../../components/new-item-button/new-item-button.component';
import { NewEntryFormTemplateComponent } from '../../components/new-entry-form-template/new-entry-form-template.component';
import { NewEntryFormReactiveComponent } from '../../components/new-entry-form-reactive/new-entry-form-reactive.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiaryComponent } from './components/diary.component';


@NgModule({
  declarations: [
    EntryItemComponent,
    ListEntriesComponent,
    NewItemButtonComponent,
    NewEntryFormTemplateComponent,
    NewEntryFormReactiveComponent,
    DiaryComponent
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiaryModule { }
