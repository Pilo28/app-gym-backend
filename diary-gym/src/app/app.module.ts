import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { authInterceptor } from './core/interceptors/auth/auth.interceptor';
import { hostInterceptor } from './core/interceptors/host/host.interceptor';
import { loadInterceptor } from './core/interceptors/loading-overlay/load.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { notificationInterceptor } from './core/interceptors/notification/notification.interceptor';
import { telemetryInterceptor } from './core/interceptors/telemetry/telemetry.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot()

  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([
        authInterceptor,
        hostInterceptor,
        loadInterceptor,
        notificationInterceptor,
      telemetryInterceptor
    ])
  )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
