import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadService } from '../../services/loading-overlay/load.service';
import { finalize } from 'rxjs/operators';

export const loadInterceptor: HttpInterceptorFn = (request, next) => {
  const loadService = inject(LoadService);
  let loaderTimeout: any;

  if (request.headers.get('X-LOADING') === 'false') {
    return next(request);
  }

  // Programa el loader para que se muestre después de 500ms si la petición aún no ha terminado
  loaderTimeout = setTimeout(() => {
    loadService.showLoader();
  }, 500);

  return next(request).pipe(
    finalize(() => {
      clearTimeout(loaderTimeout);  // Cancela el timeout si la petición termina antes de los 500ms
      loadService.hideLoader();     // Oculta el loader si estaba activo
    })
  );
};
