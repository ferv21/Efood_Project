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
}

const Home = () => {
  const { data: restaurante, isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      <div className="container">
        <ListaRestaurantes restaurantes={restaurante} isLoading={isLoading} />
      </div>
    </>
  )
}

export default Home
