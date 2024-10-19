import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarCursosComponent } from './agregar-cursos.component';

describe('AgregarCursosComponent', () => {
  let component: AgregarCursosComponent;
  let fixture: ComponentFixture<AgregarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarCursosComponent] // Cambiado de imports a declarations
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
