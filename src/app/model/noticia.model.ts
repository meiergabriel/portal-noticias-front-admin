import { Categoria } from "./categoria.model";

export class Noticia {
    id!: number|null;
    titulo!: String|null;
    corpo!: String|null;
    categoria!: Categoria|null;
}