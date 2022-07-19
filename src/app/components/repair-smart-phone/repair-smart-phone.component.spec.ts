import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairSmartPhoneComponent } from './repair-smart-phone.component';

describe('RepairSmartPhoneComponent', () => {
  let component: RepairSmartPhoneComponent;
  let fixture: ComponentFixture<RepairSmartPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairSmartPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairSmartPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
