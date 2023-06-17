export class Convite{
  id: Number;
  imagemSrc: String;
  titulo: String;
  data: Date;
  preco: String;
  local: String;
  constructor(id: Number, imagemSrc: String,
    titulo: String,
    data: Date,
    preco: String,
    local: String) {
      this.id = id;
      this.data = data;
      this.imagemSrc = imagemSrc;
      this.preco = preco;
      this.titulo = titulo;
      this.local = local;
    }
}
