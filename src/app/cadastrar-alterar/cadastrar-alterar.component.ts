import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-alterar',
  templateUrl: './cadastrar-alterar.component.html',
  styleUrls: ['./cadastrar-alterar.component.css']
})
export class CadastrarAlterarComponent {
  titulo: String;

  tituloConvite: String;
  imagemSrc: String;
  local: String;
  data: Date;
  preco: Number;
  constructor() {
    this.titulo = "Cadastrar convite";

    this.tituloConvite = "Título 1";
    this.imagemSrc = "C:\Users\thiag\OneDrive\Documentos\Scanned Documents\Imagem (3).jpg";
    this.local = "Local 1";
    this.data = new Date();
    this.preco = 30.70;
  }
}
