import { Component, Input } from '@angular/core';
import { Convite } from '../modelos/convite';

@Component({
  selector: 'app-lista-convites',
  templateUrl: './lista-convites.component.html',
  styleUrls: ['./lista-convites.component.css']
})
export class ListaConvitesComponent {
  @Input() convites!: Array<Convite>;
}
