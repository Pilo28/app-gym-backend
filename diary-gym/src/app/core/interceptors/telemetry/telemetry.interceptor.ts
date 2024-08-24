import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

export const telemetryInterceptor: HttpInterceptorFn = (request, next) => {

  if (request.headers.get('X-TELEMETRY') !== 'true') {
    return next(request);
  }

  const started = Date.now();

  return next(request).pipe(
    finalize(() => {
      const elapsed = Date.now() - started;
      const message = `${request.method} "${request.urlWithParams}" in ${elapsed} ms.`;
      console.log(message);
    })
  );
};
