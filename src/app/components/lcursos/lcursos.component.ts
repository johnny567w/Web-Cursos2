import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,

  selector: 'app-lcursos',
  templateUrl: './lcursos.component.html',
  styleUrls: ['./lcursos.component.css']
})
export class LcursosComponent implements OnInit {
  cursos: any[] = []; // Cambia el tipo a un arreglo de objetos para adaptarse a tu curso

  ngOnInit() {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursos = JSON.parse(localStorage.getItem('cursos') || '[]');
  }

  eliminarCurso(nombre: string) {
    this.cursos = this.cursos.filter(curso => curso.nombre !== nombre);
    localStorage.setItem('cursos', JSON.stringify(this.cursos)); // Guardar cambios en localStorage
  }
}
