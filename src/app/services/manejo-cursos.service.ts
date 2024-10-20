import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Curso {
  nombre: string;
  instructor: string;
  fechaInicio: string;
  duracion: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ManejoCursosService {
  private cursos: Curso[] = [];
  private cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);

  constructor() {}

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);  // Emitir los cambios
  }

  getCursosObservable() {
    return this.cursosSubject.asObservable();
  }
}
