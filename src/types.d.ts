declare module 'react-input-mask'

declare type MenuItem = {
  id: number
  foto: string
  titulo: string
  descricao: string
  preco: number
  porcao: string
  nome: string
}

declare type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}
