import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';


export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authService = inject(AuthService);
  const token = authService.token;

  if (request.url.includes('auth')) {
    return next(request);
  }

  if (token) {
    const reqAuth = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(reqAuth);
  }

  return next(request);
};
