import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLineComponent } from './phone-line.component';

describe('PhoneLineComponent', () => {
  let component: PhoneLineComponent;
  let fixture: ComponentFixture<PhoneLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
