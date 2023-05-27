import { CardCardapio } from './styles'

type Props = {
  image: string
  name: string
  description: string
}

const Cardapio = ({ image, name, description }: Props) => (
  <>
    <CardCardapio>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Adicionar ao carrinho</button>
    </CardCardapio>
  </>
)

export default Cardapio
