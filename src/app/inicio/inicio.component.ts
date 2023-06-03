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
      new Convite("https://mid.curitiba.pr.gov.br/2019/capa/00283591.jpg", "30/09/2023", "Titulo 1", "30.70"),
      new Convite("https://mid.curitiba.pr.gov.br/2019/capa/00283591.jpg", "30/09/2023", "Titulo 1", "30.70"),
      new Convite("https://mid.curitiba.pr.gov.br/2019/capa/00283591.jpg", "30/09/2023", "Titulo 1", "30.70"),
    ];
  }

  cadastrar(): void {
    this.router.navigate(['/cadastrar']);
  }
}
