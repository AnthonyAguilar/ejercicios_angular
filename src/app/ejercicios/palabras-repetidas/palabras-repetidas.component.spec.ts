import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabrasRepetidasComponent } from './palabras-repetidas.component';

describe('PalabrasRepetidasComponent', () => {
  let component: PalabrasRepetidasComponent;
  let fixture: ComponentFixture<PalabrasRepetidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalabrasRepetidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalabrasRepetidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
