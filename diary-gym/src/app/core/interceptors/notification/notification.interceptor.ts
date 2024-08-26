import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export const notificationInterceptor: HttpInterceptorFn = (request, next) => {

  let toastDisplayed = false;
  const toaster = inject(ToastrService);

  const notificationUrls = ['diary'];

  return next(request).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse &&
        event.status === 200 &&
        notificationUrls.some(url => event.url?.includes(url)) &&
        !toastDisplayed
      ) {
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
