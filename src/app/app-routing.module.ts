import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarAlterarComponent } from './cadastrar-alterar/cadastrar-alterar.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'cadastrar', component: CadastrarAlterarComponent},
  {path: 'modificar', component: CadastrarAlterarComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
