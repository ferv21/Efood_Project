import Tag from '../Tag'
import { Card, Title, Types, Descricao, LinkCard } from './styles'

type Props = {
  image: string
  types: string[]
  title: string
  rating: number
  description: string
}

const Restaurante = ({ image, types, title, rating, description }: Props) => (
  <>
    <Card>
      <img src={image} alt="" />
      <Types>
        {types.map((type) => (
          <Tag key={type}>{type}</Tag>
        ))}
      </Types>
      <div>
        <Title>
          <h3>{title}</h3>
          <p>
            {rating} <span>★</span>
          </p>
        </Title>
        <Descricao>{description}</Descricao>
        <LinkCard to="/restaurante">Saiba mais</LinkCard>
      </div>
    </Card>
  </>
)

export default Restaurante
