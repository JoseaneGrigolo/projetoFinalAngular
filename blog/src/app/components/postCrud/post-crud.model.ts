import { User } from "src/app/user";


export interface Categoria{
    idCategoria?:number;
    descricao: string; 
}

export interface Post {
    id: number;
    titulo: string;
    conteudo: string;
    categoria: Categoria;
    dataCriacao: Date;
    qtdeLikes: number;
    usuario: User;
}