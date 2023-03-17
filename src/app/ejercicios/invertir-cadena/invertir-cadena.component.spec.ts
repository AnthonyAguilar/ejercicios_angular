import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertirCadenaComponent } from './invertir-cadena.component';

describe('InvertirCadenaComponent', () => {
  let component: InvertirCadenaComponent;
  let fixture: ComponentFixture<InvertirCadenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertirCadenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertirCadenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
