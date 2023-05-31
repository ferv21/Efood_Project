import { CardCardapio } from './styles'

type Props = {
  image: string
  name: string
  description: string
}

const Cardapio = ({ image, name, description }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 180) {
      return descricao.slice(0, 177) + '...'
    }
    return descricao
  }

  return (
    <>
      <CardCardapio>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{getDescricao(description)}</p>
        <button>Mais detalhes</button>
      </CardCardapio>
    </>
  )
}

export default Cardapio
