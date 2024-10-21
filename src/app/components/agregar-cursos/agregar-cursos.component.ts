import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de tener estas importaciones
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css'],
})
export class AgregarCursosComponent implements OnInit {
  nuevoCurso = {
    nombre: '',
    instructor: '',
    fechaInicio: '',
    duracion: '',
    descripcion: ''
  };

  cursos: any[] = [];
  horaActual: string = '';
  fechaActual: string = ''; // Nueva propiedad para la fecha

  ngOnInit(): void {
    this.getCurrentTime();
    setInterval(() => {
      this.getCurrentTime(); // Actualiza la hora y la fecha cada segundo
    }, 1000);
  }

  getCurrentTime(): void {
    const now = new Date();
    this.horaActual = now.toLocaleTimeString(); // Formato legible para la hora
    this.fechaActual = now.toLocaleDateString(); // Formato legible para la fecha
  }


  // Método para agregar un nuevo curso
  addCourse(): void {
    const newCourse = { ...this.nuevoCurso, mostrarDescripcion: false };
    this.cursos.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(this.cursos));
    this.nuevoCurso = { nombre: '', instructor: '', fechaInicio: '', duracion: '', descripcion: '' }; // Resetear el formulario
  }

  // Método para mostrar u ocultar la descripción del curso
  toggleDescription(curso: any): void {
    curso.mostrarDescripcion = !curso.mostrarDescripcion;
  }

  // Método para eliminar un curso
  deleteCourse(courseName: string): void {
    this.cursos = this.cursos.filter(curso => curso.nombre !== courseName);
    localStorage.setItem("courses", JSON.stringify(this.cursos));
  }
}