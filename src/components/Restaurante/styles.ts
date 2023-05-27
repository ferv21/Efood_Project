import styled from 'styled-components'
import { cores } from '../../styles'
import { TagRestaurante } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corFundo};
  position: relative;
  img {
    width: 480px;
    height: 220px;
  }
  ${TagRestaurante} {
    margin-left: 8px;
  }
  div {
    padding: 8px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.vermelhoClaro};
  span {
    color: gold;
  }
`

export const Types = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`
export const Descricao = styled.p`
  color: ${cores.vermelhoClaro};
  line-height: 22px;
`

export const LinkCard = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 4px 6px;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.corTexto};
  text-decoration: none;
`
