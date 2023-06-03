import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrls: ['./convite.component.css']
})
export class ConviteComponent {
  @Input() imagemSrc!: String;
  @Input() titulo!: String;
  @Input() data!: String;
  @Input() preco!: String;
}
