import { Component } from '@angular/core';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrls: ['./convite.component.css']
})
export class ConviteComponent {
  imagemSrc: String;
  titulo: String;
  data: Date;
  preco: Number;

  constructor() {
    this.data = new Date();
    this.imagemSrc = 'https://mid.curitiba.pr.gov.br/2019/capa/00283591.jpg';
    this.preco = 30.70;
    this.titulo = 'Titulo 1';
  }
}
