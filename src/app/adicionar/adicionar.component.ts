import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {
@Output() pressionado = new EventEmitter<void>();

pressionar(): void {
  this.pressionado.emit();
}
}
