import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStudentComponent } from './booking-student.component';

describe('BookingStudentComponent', () => {
  let component: BookingStudentComponent;
  let fixture: ComponentFixture<BookingStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingStudentComponent]
    });
    fixture = TestBed.createComponent(BookingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
