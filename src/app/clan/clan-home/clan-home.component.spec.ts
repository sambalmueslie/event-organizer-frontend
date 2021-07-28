import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanHomeComponent } from './clan-home.component';

describe('ClanHomeComponent', () => {
  let component: ClanHomeComponent;
  let fixture: ComponentFixture<ClanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
