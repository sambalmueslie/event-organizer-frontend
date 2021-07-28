import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAuthItemComponent } from './nav-auth-item.component';

describe('NavAuthItemComponent', () => {
  let component: NavAuthItemComponent;
  let fixture: ComponentFixture<NavAuthItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAuthItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAuthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
