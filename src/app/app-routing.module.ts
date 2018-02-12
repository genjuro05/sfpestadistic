import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Importamos los componentes del sitio en las rutas*/
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { ServPublicoComponent } from './components/serv-publico/serv-publico.component';

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'busqueda/serv_publico', component: ServPublicoComponent },
  {path: '**', component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
