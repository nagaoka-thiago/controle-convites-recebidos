import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchTextfieldComponent } from './search-textfield/search-textfield.component';
import { ListaConvitesComponent } from './lista-convites/lista-convites.component';
import { ConviteComponent } from './convite/convite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchTextfieldComponent,
    ListaConvitesComponent,
    ConviteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
