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
    this.router.navigate(['/modificar', {modificar: true, id: convite.id, imagemSrc: convite.imagemSrc, titulo: convite.titulo, data: convite.data, preco: convite.preco, local: convite.local}]);
  }

  deletar(convite: Convite) : void {
    let convites: Convite[] = JSON.parse(localStorage.getItem('convites')!);
    convites = convites.filter((c) => c.id != convite.id);
    localStorage.setItem('convites', JSON.stringify(convites));
    window.location.reload();
  }
}
