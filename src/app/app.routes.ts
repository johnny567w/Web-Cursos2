import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
  {
    path:'pages/inicio',
    component: InicioComponent
   },
    {
      path: 'pages/acercade',
      component: FooterComponent
    },
    {
      path: 'pages/agregar-cursos',
      component: AgregarCursosComponent
    },
    {
      path: 'pages/cursos',
      component: CursosComponent
    }
    ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
