import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagRestaurante } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corFundo};
  position: relative;
  border: 1px solid ${cores.vermelhoClaro};

  @media (min-width: ${breakpoints.tablet}) {
    width: 480px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 220px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
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
export const Description = styled.p`
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
