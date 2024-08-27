import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const notificationInterceptor: HttpInterceptorFn = (request, next) => {
  const toaster = inject(ToastrService);

  const notificationUrls = ['diary'];

  return next(request).pipe(
    tap((event: HttpEvent<any>) => {
      if (
        event instanceof HttpResponse &&
        event.status === 200 &&
        notificationUrls.some(url => event.url?.includes(url))
      ) {
        if (request.method === 'POST') {
          toaster.success('¡Recurso creado con éxito!');
        } else if (request.method === 'PUT' || request.method === 'PATCH') {
          toaster.info('¡Recurso actualizado con éxito!');
        } else if (request.method === 'DELETE') {
          toaster.warning('¡Recurso eliminado con éxito!');
        } else if (request.method === 'GET') {
          const welcomeMessageShown = localStorage.getItem('welcomeMessageShown');

          if (!welcomeMessageShown) {
            toaster.success('¡Bienvenido!');
            localStorage.setItem('welcomeMessageShown', 'true');
          }
        }
      }
    })
  );
};
