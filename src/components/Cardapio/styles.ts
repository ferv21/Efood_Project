import styled from 'styled-components'
import { cores } from '../../styles'

export const CardCardapio = styled.div`
  background-color: ${cores.vermelhoClaro};
  padding: 8px;
  color: ${cores.corTexto};
  img {
    width: 100%;
  }
  h3 {
    margin-bottom: 8px;
  }
  p {
    line-height: 22px;
  }

  button {
    margin-top: 8px;
    width: 100%;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.vermelhoClaro};
    background-color: ${cores.corTexto};
    border: none;
  }
`
