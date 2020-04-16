import { TestBed } from '@angular/core/testing';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouteGaurdService } from './route-gaurd.service';

const fakeRouter = {
  
} as Router;
describe('RouteGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      {provide: Router,useValue:fakeRouter}
    ]
  }));

  it('should be created', () => {
    const service: RouteGaurdService = TestBed.get(RouteGaurdService);
    expect(service).toBeTruthy();
  });
});
