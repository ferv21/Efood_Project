import styled from 'styled-components'
import { LogoEfood } from '../Header/styles'
import { cores } from '../../styles'

export const HeaderContent = styled.div``

export const LogoRestaurante = styled(LogoEfood)`
  display: flex;
  justify-content: center;
`

export const ListaRestaurantes = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${cores.vermelhoClaro};
  }
`

export const BannerRestaurante = styled.div`
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  position: relative;
  &::after {
    position: absolute;
    background-color: #000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`
export const TituloRestaurante = styled.div`
  color: ${cores.corFundo};
  padding-top: 216px;
  padding-bottom: 32px;
`

export const TagTipo = styled.span`
  position: absolute;
  top: 24px;
  left: 0;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.corFundo};
`
