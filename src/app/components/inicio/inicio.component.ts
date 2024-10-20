import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true // Agrega esta línea
})
export class InicioComponent {
  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
