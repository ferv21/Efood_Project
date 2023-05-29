import Tag from '../Tag'
import { Card, Title, Types, Descricao, LinkCard, Infos } from './styles'

type Props = {
  image: string
  types: string
  title: string
  rating: number
  description: string
  id: number
  destaque?: boolean
}

const Restaurante = ({
  image,
  types,
  title,
  rating,
  description,
  id,
  destaque
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 280) {
      return descricao.slice(0, 277) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <img src={image} alt="" />
        <Types>
          {destaque ? (
            <>
              <Tag>Destaque da semana</Tag>
            </>
          ) : null}
          <Tag>{types}</Tag>
        </Types>
        <Infos>
          <Title>
            <h3>{title}</h3>
            <p>
              {rating} <span>★</span>
            </p>
          </Title>
          <Descricao>{getDescricao(description)}</Descricao>
          <LinkCard to={`/restaurante/${id}`}>Saiba mais</LinkCard>
        </Infos>
      </Card>
    </>
  )
}

export default Restaurante
