export class Libro{
  constructor(
    public isbn: string,
    public titulo: string,
    public resumen: string,
    public cantidad: number,
    public portada: string
  ) {}
}
