import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-textfield',
  templateUrl: './search-textfield.component.html',
  styleUrls: ['./search-textfield.component.css']
})
export class SearchTextfieldComponent {
  @Output() digitado = new EventEmitter<String>();

  onDigitado(evento: any) {
    if(evento instanceof EventTarget) {
      this.digitado.emit((evento as HTMLInputElement).value);
    }
  }
}
