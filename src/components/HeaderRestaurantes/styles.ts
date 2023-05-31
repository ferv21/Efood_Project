import styled from 'styled-components'
import { LogoEfood } from '../Header/styles'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const LogoRestaurante = styled(LogoEfood)``

export const ListaRestaurantes = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    color: ${cores.vermelhoClaro};
  }
`

export const Restaurant = styled(Link)`
  color: ${cores.vermelhoClaro};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  line-height: 22px;
`
export const Carrinho = styled.div`
  display: flex;
  justify-content: end;
  color: ${cores.vermelhoClaro};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  line-height: 22px;
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
