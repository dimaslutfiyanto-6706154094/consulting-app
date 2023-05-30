import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingPatientComponent } from './consulting-patient.component';

describe('ConsultingPatientComponent', () => {
  let component: ConsultingPatientComponent;
  let fixture: ComponentFixture<ConsultingPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
