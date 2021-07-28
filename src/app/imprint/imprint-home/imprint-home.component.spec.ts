import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintHomeComponent } from './imprint-home.component';

describe('ImprintHomeComponent', () => {
  let component: ImprintHomeComponent;
  let fixture: ComponentFixture<ImprintHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprintHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprintHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
