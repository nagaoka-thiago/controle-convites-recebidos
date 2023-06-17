import { Component, OnInit } from '@angular/core';
import { Convite } from '../modelos/convite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  convites!: Array<Convite>;

  constructor(private route: ActivatedRoute, private router: Router){
    this.convites = [];
  }

  ngOnInit(): void {
    if(localStorage.getItem('convites') == null) {
      localStorage.setItem('convites', JSON.stringify([]));
      this.convites = [];
    }

    this.convites = JSON.parse(localStorage.getItem('convites')!);
  }

  valorMudado(novoValor: String): void {
    this.convites = JSON.parse(localStorage.getItem('convites')!);
    if(novoValor != null && novoValor != '') {
      this.convites = this.convites?.filter(convite => convite.titulo.toLowerCase().search(novoValor.toLowerCase()) != -1);
    }
  }

  cadastrar(): void {
    this.router.navigate(['/cadastrar', {modificar: false}]);
  }
}
