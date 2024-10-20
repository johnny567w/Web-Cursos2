import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: any[] = [];

  constructor() {}

  agregarCurso(curso: any) {
    this.cursos.push(curso);
  }

  getCursos() {
    return this.cursos;
  }
}
