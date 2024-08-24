import { HttpInterceptorFn } from '@angular/common/http';

export const hostInterceptor: HttpInterceptorFn = (request, next) => {
  const baseUrl = 'http://localhost:3000';
  const resource = request.url;

  if (request.url.includes('http')) {
    return next(request);
  }

  const modifiedRequest = request.clone({
    url: `${baseUrl}/${resource}`,
  });

  return next(modifiedRequest);
};
