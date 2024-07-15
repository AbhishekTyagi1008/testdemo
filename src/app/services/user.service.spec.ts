import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';


describe('UserServiceTestSuite',()=>
  {
    let service:UserService;

    beforeEach(()=>
      {
        TestBed.configureTestingModule({});
        service=TestBed.inject(UserService);
      });

      it('service should be created',()=>
        {
          expect(service).toBeTruthy();
        });

        it('should fetch users',()=>
          {
            service.getUser().subscribe((users)=>
              {
                  expect(users.length).toBeGreaterThan(0);
              });
          });
  });