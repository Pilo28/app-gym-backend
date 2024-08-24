import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadService } from '../../services/loading-overlay/load.service';
import { finalize } from 'rxjs/operators';

export const loadInterceptor: HttpInterceptorFn = (request, next) => {
  const loadService = inject(LoadService);

  if (request.headers.get('X-LOADING') === 'false') {
    return next(request);
  }

  loadService.showLoader();

  return next(request).pipe(
    finalize(() => loadService.hideLoader())
  );
};
