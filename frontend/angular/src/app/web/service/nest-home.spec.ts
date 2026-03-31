import { TestBed } from '@angular/core/testing';

import { NestHome } from './nest-home';

describe('NestHome', () => {
  let service: NestHome;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestHome);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
