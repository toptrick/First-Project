import { TestBed } from '@angular/core/testing';

import { HardcodedAutenticationService } from './hardcoded-autentication.service';

describe('HardcodedAutenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAutenticationService = TestBed.get(HardcodedAutenticationService);
    expect(service).toBeTruthy();
  });
  it(`should return false when auth('hello','password') is called`, () => {
    const service: HardcodedAutenticationService = TestBed.get(HardcodedAutenticationService);
    expect(service.auth('hello','password')).toEqual(false);
  });
  it(`should return true when auth('toptricks.net','dummy') is called`, () => {
    const service: HardcodedAutenticationService = TestBed.get(HardcodedAutenticationService);
    expect(service.auth('toptricks.net','dummy')).toEqual(true);
  });
  it(`should return true when isUserlogged is called for auth('toptricks.net','dummy') is called`, () => {
    const service: HardcodedAutenticationService = TestBed.get(HardcodedAutenticationService);
    service.auth('toptricks.net','dummy');
    expect(service.isUserLoggedin()).toEqual(true);
  });
});
