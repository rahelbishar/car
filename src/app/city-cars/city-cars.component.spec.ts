import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCarsComponent } from './city-cars.component';

describe('CityCarsComponent', () => {
  let component: CityCarsComponent;
  let fixture: ComponentFixture<CityCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
