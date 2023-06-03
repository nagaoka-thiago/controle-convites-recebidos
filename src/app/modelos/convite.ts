export class Convite{
  private imagemSrc: String;
  private titulo: String;
  private data: String;
  private preco: String;
  constructor(imagemSrc: String,
    titulo: String,
    data: String,
    preco: String) {
      this.data = data;
      this.imagemSrc = imagemSrc;
      this.preco = preco;
      this.titulo = titulo;
    }

  public getImagemSrc() : String {
    return this.imagemSrc;
  }
  public getTitulo() : String {
    return this.titulo;
  }
  public getData() : String {
    return this.data;
  }
  public getPreco() : String {
    return this.preco;
  }
}
