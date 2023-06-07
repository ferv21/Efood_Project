import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListaContainer = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;

  @media (max-width: ${breakpoints.cellphone}) {
    padding: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
