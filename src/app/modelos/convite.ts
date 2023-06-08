export class Convite{
  private id: Number;
  private imagemSrc: String;
  private titulo: String;
  private data: Date;
  private preco: String;
  private local: String;
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

  public getId() : Number {
    return this.id;
  }

  public getImagemSrc() : String {
    return this.imagemSrc;
  }
  public getTitulo() : String {
    return this.titulo;
  }
  public getData() : Date {
    return this.data;
  }
  public getPreco() : String {
    return this.preco;
  }
  public getLocal() : String {
    return this.local;
  }
}
