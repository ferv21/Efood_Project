import { TagRestaurante } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => (
  <>
    <TagRestaurante>{children}</TagRestaurante>
  </>
)

export default Tag
