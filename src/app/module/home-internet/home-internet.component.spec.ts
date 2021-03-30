import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInternetComponent } from './home-internet.component';

describe('HomeInternetComponent', () => {
  let component: HomeInternetComponent;
  let fixture: ComponentFixture<HomeInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
