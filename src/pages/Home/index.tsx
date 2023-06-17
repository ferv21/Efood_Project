import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

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
