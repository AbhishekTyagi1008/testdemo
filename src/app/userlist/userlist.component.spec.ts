import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserlistComponent } from './userlist.component';
import { UserService } from '../services/user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let userService:UserService;
  let userServiceSpy:jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistComponent ],
      providers:[UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    
    userService=TestBed.inject(UserService);
    userServiceSpy=spyOn(userService,'getUser').and.returnValue(of([
      {id:1,name:'abhishek'},
      {id:2,name:'angular'},
      {id:3,name:'frontend'}
    ]));

    fixture.detectChanges();
  });
   
  it('should retrive user on init',()=>
    {
      fixture.detectChanges();
      expect(userServiceSpy).toHaveBeenCalled();
    });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on button clciked',()=>
    {
      userServiceSpy.calls.reset();

      const button=fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click',null);
      expect(userServiceSpy).toHaveBeenCalled();
    });

});
