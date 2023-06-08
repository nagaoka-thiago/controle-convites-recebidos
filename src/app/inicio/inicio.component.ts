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
    if(localStorage.getItem('convites') == null) localStorage.setItem('convites', JSON.stringify([]));

    this.convites = JSON.parse(localStorage.getItem('convites')!);
  }

  cadastrar(): void {
    this.router.navigate(['/cadastrar', {modificar: false}]);
  }
}
