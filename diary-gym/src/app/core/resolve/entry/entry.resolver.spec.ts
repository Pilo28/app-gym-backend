import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { entryResolver } from './entry.resolver';

describe('entryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => entryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
