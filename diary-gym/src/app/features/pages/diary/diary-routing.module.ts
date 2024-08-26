import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './components/diary.component';
import { NewEntryFormTemplateComponent } from '../../components/new-entry-form-template/new-entry-form-template.component';
import { NewEntryFormReactiveComponent } from '../../components/new-entry-form-reactive/new-entry-form-reactive.component';
import { diaryResolver } from '../../../core/resolve/diary/diary.resolver';
import { entryResolver } from '../../../core/resolve/entry/entry.resolver';

const routes: Routes = [
  {
    path: '',
    component: DiaryComponent,
    title: 'Diary',
    resolve: { exerciseList: diaryResolver },
  },
  {
    path: 'new-template',
    component: NewEntryFormTemplateComponent,
  },
  {
    path: 'entry',
    component: NewEntryFormReactiveComponent,
    title: 'Entry Form',
  },
  {
    path: 'entry/:id',
    component: NewEntryFormReactiveComponent,
    title: 'Edit Entry',
    resolve: { entryData: entryResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
