import styled from 'styled-components'
import { cores } from '../../styles'
import { TagRestaurante } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corFundo};
  position: relative;
  border: 1px solid ${cores.vermelhoClaro};
  img {
    object-fit: cover;
    width: 480px;
    height: 220px;
  }
  ${TagRestaurante} {
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  padding: 8px;
`

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${cores.vermelhoClaro};
  font-weight: bold;
  span {
    color: gold;
  }
`

export const Types = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`
export const Descricao = styled.p`
  color: ${cores.vermelhoClaro};
  line-height: 22px;
  margin-top: 16px;
`

export const LinkCard = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 4px 6px;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.corTexto};
  text-decoration: none;
  font-weight: bold;
`
