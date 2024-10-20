import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcursosComponent } from './lcursos.component';

describe('LcursosComponent', () => {
  let component: LcursosComponent;
  let fixture: ComponentFixture<LcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LcursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
