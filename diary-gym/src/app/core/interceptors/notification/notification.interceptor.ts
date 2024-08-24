import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

let toastDisplayed = false;

export const notificationInterceptor: HttpInterceptorFn = (request, next) => {
  const toaster = inject(ToastrService);

  return next(request).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.status === 200) {
        if (!toastDisplayed) {
          toaster.success('Bienvenido!');
          toastDisplayed = true;

          setTimeout(() => {
            toastDisplayed = false;
          }, 2000);
        }
      }
    })
  );
};
