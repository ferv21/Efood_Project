import Loader from '../Loader'
import Restaurante from '../Restaurante'
import { ListaContainer } from './styles'

export type Props = {
  restaurantes?: Restaurantes[]
  isLoading?: boolean
}

const ListaRestaurantes = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <ListaContainer>
      {restaurantes &&
        restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurante
              id={restaurante.id}
              destaque={restaurante.destacado}
              image={restaurante.capa}
              title={restaurante.titulo}
              types={restaurante.tipo}
              rating={restaurante.avaliacao}
              description={restaurante.descricao}
            />
          </li>
        ))}
    </ListaContainer>
  )
}

export default ListaRestaurantes
