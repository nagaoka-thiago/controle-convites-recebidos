import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Convite } from '../modelos/convite';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrls: ['./convite.component.css']
})
export class ConviteComponent{
  @Input() convite!: Convite;
  @Output() pressionado = new EventEmitter<void>();
  @Output() deletar = new EventEmitter<Convite>();

  clicar(): void {
    this.pressionado.emit();
  }

  clicouDeletar(convite: Convite): void {
    this.deletar.emit(convite);
  }
}
