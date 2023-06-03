import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchTextfieldComponent } from './search-textfield/search-textfield.component';
import { ListaConvitesComponent } from './lista-convites/lista-convites.component';
import { ConviteComponent } from './convite/convite.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { CadastrarAlterarComponent } from './cadastrar-alterar/cadastrar-alterar.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchTextfieldComponent,
    ListaConvitesComponent,
    ConviteComponent,
    AdicionarComponent,
    CadastrarAlterarComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
