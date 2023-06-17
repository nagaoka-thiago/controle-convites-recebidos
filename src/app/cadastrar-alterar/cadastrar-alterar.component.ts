import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convite } from '../modelos/convite';
import { ApiRequestServiceService } from '../api-request-service.service';

@Component({
  selector: 'app-cadastrar-alterar',
  templateUrl: './cadastrar-alterar.component.html',
  styleUrls: ['./cadastrar-alterar.component.css']
})
export class CadastrarAlterarComponent implements OnInit {
  titulo!: String;
  modificar!: Boolean;

  id!: Number;
  tituloConvite!: String;
  imagemSrc!: String;
  local!: String;
  data!: Date;
  preco!: String;
  constructor(private router: ActivatedRoute, private route: Router, private apiService: ApiRequestServiceService) {
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.modificar = params['modificar'] == "true";
      if(this.modificar) {
        this.titulo = 'Modificar convite';

        this.apiService.pegarConvite(params['id']).then(response => {
          if(response != undefined) {
            this.id = (response as Convite).id;
            this.imagemSrc = (response as Convite).imagemSrc;
            this.tituloConvite = (response as Convite).titulo;
            this.data = (response as Convite).data;
            this.preco = (response as Convite).preco;
            this.local = (response as Convite).local;
          }
        });


      }
      else {
        this.titulo = 'Cadastrar convite';
      }
    });
  }
  cadastrar(): void {
    if(this.modificar) {
      let convite: Convite = new Convite(this.id, this.imagemSrc, this.tituloConvite, this.data, this.preco, this.local);
      this.apiService.modificar(convite);
    }
    else {
      let convite: Convite = new Convite(0, this.imagemSrc, this.tituloConvite, this.data, this.preco, this.local);
      this.apiService.cadastrar(convite);
    }
    this.route.navigate(['/inicio']);
  }

  voltar(): void {
    this.route.navigate(['/inicio']);
  }
}
