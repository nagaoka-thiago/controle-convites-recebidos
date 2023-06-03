import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrls: ['./convite.component.css']
})
export class ConviteComponent {
  @Input() imagemSrc!: String;
  @Input() titulo!: String;
  @Input() data!: Date;
  @Input() preco!: String;
  @Input() local!: String;
  @Output() pressionado = new EventEmitter<void>();

  clicar(): void {
    this.pressionado.emit();
  }
}
