import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManejoCursosService } from '../../services/manejo-cursos.service';

@Component({
  selector: 'app-agregar-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de tener estas importaciones
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css'],
})
export class AgregarCursosComponent implements OnInit {
  nuevoCurso: any = {
    nombre: '',
    instructor: '',
    fechaInicio: '',
    duracion: '',
    descripcion: '',
    mostrarDescripcion: false
  };
  cursos: any[] = [];

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    const storedCourses = JSON.parse(localStorage.getItem("courses") || '[]');
    this.cursos = storedCourses; // Asigna los cursos cargados a la variable del componente
  }

  addCourse(): void {
    if (!this.validateCourseForm()) {
      return;
    }

    const newCourse = {
      ...this.nuevoCurso,
      mostrarDescripcion: false // Inicialmente no se muestra la descripción
    };

    this.cursos.push(newCourse);
    this.saveCourses();
    this.nuevoCurso = { // Resetea el formulario
      nombre: '',
      instructor: '',
      fechaInicio: '',
      duracion: '',
      descripcion: '',
      mostrarDescripcion: false
    };
  }

  saveCourses(): void {
    localStorage.setItem("courses", JSON.stringify(this.cursos));
  }

  validateCourseForm(): boolean {
    const { nombre, instructor, fechaInicio, duracion } = this.nuevoCurso;
    if (!nombre || !instructor || !fechaInicio || !duracion) {
      alert("Por favor, completa todos los campos obligatorios.");
      return false;
    }
    return true;
  }

  toggleDescription(curso: any): void {
    curso.mostrarDescripcion = !curso.mostrarDescripcion; // Cambia el estado de mostrar la descripción
  }

  deleteCourse(courseName: string): void {
    this.cursos = this.cursos.filter(course => course.nombre !== courseName);
    this.saveCourses();
  }
}