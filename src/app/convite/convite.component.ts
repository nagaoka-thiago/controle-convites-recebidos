import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Convite } from '../modelos/convite';

@Component({
  selector: 'app-convite',
  templateUrl: './convite.component.html',
  styleUrls: ['./convite.component.css']
})
export class ConviteComponent implements OnInit{
  @Input() convite!: Convite;
  @Output() pressionado = new EventEmitter<void>();

  imagemSrc!: String;
  clicar(): void {
    this.pressionado.emit();
  }

  ngOnInit(): void {
    console.log(this.convite);
      this.imagemSrc = this.convite.getImagemSrc();
  }
}
