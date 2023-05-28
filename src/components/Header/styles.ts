import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const BannerImg = styled.header`
  display: block;
  padding: 40px;
`

export const HeaderContainer = styled.div`
  max-width: 510px;
  width: 100%;
  margin: 0 auto;
`

export const LogoEfood = styled(Link)`
  display: flex;
  justify-content: center;
`

export const Titulo = styled.h1`
  text-align: center;
  margin-top: 140px;
  font-weight: 900;
  color: ${cores.vermelhoClaro};
`
