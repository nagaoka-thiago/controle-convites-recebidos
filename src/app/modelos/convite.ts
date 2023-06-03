export class Convite{
  private imagemSrc: String;
  private titulo: String;
  private data: Date;
  private preco: String;
  private local: String;
  constructor(imagemSrc: String,
    titulo: String,
    data: Date,
    preco: String,
    local: String) {
      this.data = data;
      this.imagemSrc = imagemSrc;
      this.preco = preco;
      this.titulo = titulo;
      this.local = local;
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
