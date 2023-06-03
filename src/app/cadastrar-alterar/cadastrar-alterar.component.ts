import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convite } from '../modelos/convite';

@Component({
  selector: 'app-cadastrar-alterar',
  templateUrl: './cadastrar-alterar.component.html',
  styleUrls: ['./cadastrar-alterar.component.css']
})
export class CadastrarAlterarComponent implements OnInit {
  titulo!: String;

  tituloConvite!: String;
  imagemSrc!: String;
  local!: String;
  data!: Date;
  preco!: String;
  constructor(private router: ActivatedRoute, private route: Router) {
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['modificar'] == 'true') {
        this.titulo = 'Modificar convite';
        this.imagemSrc = params['imagemSrc'];
        this.tituloConvite = params['titulo'];
        this.data = params['data'];
        this.preco = params['preco'];
        this.local = params['local'];
      }
      else {
        this.titulo = 'Cadastrar convite';
      }
    });
  }
  cadastrar(): void {
    this.route.navigate(['/inicio']);
  }

  voltar(): void {
    this.route.navigate(['/inicio']);
  }
}
