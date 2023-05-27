import Restaurantes from '../../models/Restaurantes'
import Restaurante from '../Restaurante'
import { ListaContainer } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => {
  return (
    <ListaContainer>
      {restaurantes.map((restaurante) => (
        <Restaurante
          key={restaurante.id}
          image={restaurante.image}
          title={restaurante.title}
          types={restaurante.types}
          rating={restaurante.rating}
          description={restaurante.description}
        />
      ))}
    </ListaContainer>
  )
}

export default ListaRestaurantes
