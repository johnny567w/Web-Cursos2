// app.routes.ts
import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LcursosComponent } from './components/lcursos/lcursos.component';

export const routes: Routes = [
  {
    path: 'pages/inicio',
    component: InicioComponent
  },
  {
    path: 'pages/agregar-cursos',
    component: AgregarCursosComponent
  },
  {
    path: 'pages/cursos',
    component: LcursosComponent
  },
  {
    path: 'pages/acercade',
    component: FooterComponent
  },
  {
    path: 'pages/informacion',
    component: InformacionComponent
  },
  { path: '', redirectTo: '/pages/inicio', pathMatch: 'full' }, // Redirección a inicio
  { path: '**', redirectTo: '/pages/inicio' } // Redirección en caso de error
];
