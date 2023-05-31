import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurante } = useGetRestaurantesQuery()

  if (restaurante) {
    return (
      <>
        <Header />
        <div className="container">
          <ListaRestaurantes restaurantes={restaurante} />
        </div>
      </>
    )
  }
  return (
    <>
      <h1>Carregando...</h1>
    </>
  )
}

export default Home
