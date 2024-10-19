import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { InformacionComponent } from './components/informacion/informacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,InicioComponent,CursosComponent,AgregarCursosComponent,ListaCursosComponent,InformacionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido aquí
})
export class AppComponent {
  title = 'web-Cursos2';
}

interface Course {
  name: string;
  instructor: string;
  startDate: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-course',
  template: '', 
  styles: []  
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadCourses(); // Cargar los cursos al iniciar el componente
  }

  loadCourses(): void {
    const storedCourses: Course[] = JSON.parse(localStorage.getItem("courses") || '[]');
    this.courses = storedCourses; // Asigna los cursos cargados a la variable del componente
  }

  saveCourses(): void {
    localStorage.setItem("courses", JSON.stringify(this.courses));
  }

  validateCourseForm(courseName: string, instructorName: string, startDate: string, duration: string): boolean {
    if (!courseName || !instructorName || !startDate || !duration) {
      alert("Por favor, completa todos los campos obligatorios.");
      return false;
    }
    return true;
  }

  addCourse(courseName: string, instructorName: string, startDate: string, duration: string, description: string): void {
    if (!this.validateCourseForm(courseName, instructorName, startDate, duration)) {
      return;
    }

    const newCourse: Course = {
      name: courseName,
      instructor: instructorName,
      startDate: startDate,
      duration: duration,
      description: description
    };

    this.courses.push(newCourse);
    this.saveCourses();
  }

  deleteCourse(courseName: string): void {
    this.courses = this.courses.filter(course => course.name !== courseName);
    this.saveCourses();
  }
}
