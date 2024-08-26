import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { notificationInterceptor } from './notification.interceptor';
import { ToastrService } from 'ngx-toastr';

describe('NotificationInterceptor', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useValue: notificationInterceptor,
          multi: true,
        },
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['success']),
        },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(TestBed.inject(HTTP_INTERCEPTORS)).toBeTruthy();
  });

});
