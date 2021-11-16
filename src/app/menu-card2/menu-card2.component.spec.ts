import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCard2Component } from './menu-card2.component';

describe('MenuCard2Component', () => {
  let component: MenuCard2Component;
  let fixture: ComponentFixture<MenuCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
