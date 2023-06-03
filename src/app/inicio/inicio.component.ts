import { Component, OnInit } from '@angular/core';
import { Convite } from '../modelos/convite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  convites!: Array<Convite>;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.convites = [
      new Convite("https://mid.curitiba.pr.gov.br/2019/capa/00283591.jpg", "Titulo 1", new Date("2023/09/23"), "30.70", "Local 1"),
      new Convite("https://img.freepik.com/fotos-gratis/amigos-tilintar-de-copos-de-bebida-em-um-bar-moderno_1150-18971.jpg", "Titulo 2", new Date("2023/12/25"), "53.80", "Local 2"),
      new Convite("https://ichef.bbci.co.uk/news/640/cpsprodpb/42C7/production/_113359071_festagettyimages-920382040.jpg", "Titulo 3", new Date("2023/05/30"), "25.70", "Local 3"),
    ];
  }

  cadastrar(): void {
    this.router.navigate(['/cadastrar', {modificar: false}]);
  }
}
