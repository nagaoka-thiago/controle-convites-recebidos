import { Component, Input } from '@angular/core';
import { Convite } from '../modelos/convite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-convites',
  templateUrl: './lista-convites.component.html',
  styleUrls: ['./lista-convites.component.css']
})
export class ListaConvitesComponent {
  @Input() convites!: Array<Convite>;

  constructor(private routes: ActivatedRoute, private router: Router) {}

  modificar(convite: Convite): void {
    this.router.navigate(['/modificar', {modificar: true, id: convite.getId(), imagemSrc: convite.getImagemSrc(), titulo: convite.getTitulo(), data: convite.getData(), preco: convite.getPreco(), local: convite.getLocal()}]);
  }
}
