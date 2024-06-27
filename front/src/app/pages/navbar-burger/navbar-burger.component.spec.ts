import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBurgerComponent } from './navbar-burger.component';

describe('NavbarBurgerComponent', () => {
  let component: NavbarBurgerComponent;
  let fixture: ComponentFixture<NavbarBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
