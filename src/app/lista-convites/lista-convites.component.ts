import { Component, Input } from '@angular/core';
import { Convite } from '../modelos/convite';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestServiceService } from '../api-request-service.service';

@Component({
  selector: 'app-lista-convites',
  templateUrl: './lista-convites.component.html',
  styleUrls: ['./lista-convites.component.css']
})
export class ListaConvitesComponent {
  @Input() convites!: Array<Convite>;

  constructor(private routes: ActivatedRoute, private router: Router, private apiService: ApiRequestServiceService) {}

  modificar(convite: Convite): void {
    this.router.navigate(['/modificar', {modificar: true, id: convite.id,}]);
  }

  deletar(convite: Convite) : void {
    this.apiService.deletar(convite.id as number);
    window.location.reload();
  }
}
