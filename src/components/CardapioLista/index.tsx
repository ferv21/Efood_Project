import CardapioClass from '../../models/Cardapio'
import Cardapio from '../Cardapio'
import { Listagem } from './styles'

export type Props = {
  cardapio: CardapioClass[]
}

const CardapioLista = ({ cardapio }: Props) => {
  return (
    <Listagem className="container">
      {cardapio.map((comida) => (
        <Cardapio
          key={comida.id}
          image={comida.image}
          name={comida.name}
          description={comida.description}
        />
      ))}
    </Listagem>
  )
}
export default CardapioLista
