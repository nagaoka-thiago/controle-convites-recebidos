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
  modificar!: Boolean;

  id!: Number;
  tituloConvite!: String;
  imagemSrc!: String;
  local!: String;
  data!: Date;
  preco!: String;
  constructor(private router: ActivatedRoute, private route: Router) {
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.modificar = params['modificar'] == "true";
      if(this.modificar) {
        this.titulo = 'Modificar convite';
        this.id = params['id'];
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
    if(this.modificar) {
      let convite: Convite = new Convite(this.id, this.imagemSrc, this.tituloConvite, this.data, this.preco, this.local);
      let convites: Convite[] = JSON.parse(localStorage.getItem('convites')!);
      for(let i = 0; i < convites.length; i++) {
        if(convites[i].getId() == convite.getId()) {
          convites[i] = convite;
        }
      }
      localStorage.setItem('convites', JSON.stringify(convites));
    }
    else {
      let convites: Convite[] = JSON.parse(localStorage.getItem('convites')!);
      let convite: Convite = new Convite(convites.length + 1, this.imagemSrc, this.tituloConvite, this.data, this.preco, this.local);
      convites.push(convite);
      localStorage.setItem('convites', JSON.stringify(convites));
    }
    this.route.navigate(['/inicio']);
  }

  voltar(): void {
    this.route.navigate(['/inicio']);
  }
}
