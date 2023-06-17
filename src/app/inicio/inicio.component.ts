import { Component, OnInit } from '@angular/core';
import { Convite } from '../modelos/convite';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestServiceService } from '../api-request-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  convites!: Convite[];

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiRequestServiceService){
    this.apiService.pegarConvites().then(response => {
      if(response != undefined) {
        this.convites = response as Convite[];
      }
    });
  }

  ngOnInit(): void {
    this.apiService.pegarConvites().then(response => {
      if(response != undefined) {
        this.convites = response as Convite[];
      }
    });

  }

  valorMudado(novoValor: String): void {
    this.apiService.pegarConvites().then(response => {
      if(response != undefined) {
        this.convites = response as Convite[];
      }
    });
    if(novoValor != null && novoValor != '') {
      this.convites = this.convites?.filter(convite => convite.titulo.toLowerCase().search(novoValor.toLowerCase()) != -1);
    }
  }

  cadastrar(): void {
    this.router.navigate(['/cadastrar', {modificar: false}]);
  }
}
