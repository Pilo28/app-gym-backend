import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoadingOverlayComponent } from './loading/loading-overlay/loading-overlay.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPageComponent,
    LoadingOverlayComponent
  ]
})
export class SharedModule { }
