export interface Product {
 id?: number | null //id é opcional ao criar, o backend que cria.. só precisa pra alterar e excluir
 name : string
 price?: number | null
}