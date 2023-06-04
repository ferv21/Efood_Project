import styled from 'styled-components'
import { CartContainer, SideBar } from '../Cart/styles'
import { cores } from '../../styles'

export const OrderContainer = styled(CartContainer)`
  display: none;

  .is-open {
    display: flex;
  }
`

export const FormBar = styled(SideBar)`
  p {
    color: ${cores.corTexto};
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 8px 0;
    color: ${cores.corTexto};
    font-weight: bold;
    font-size: 14px;
  }
  input {
    height: 32px;
    background-color: ${cores.corTexto};
    border: none;
  }
`
export const InputNumbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 34px;
  div {
    margin-top: 8px;
  }

  label {
    color: ${cores.corTexto};
    font-weight: bold;
    font-size: 14px;
  }

  input {
    margin-top: 8px;
    height: 32px;
    width: 100%;
    background-color: ${cores.corTexto};
    border: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    margin-bottom: 8px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: ${cores.corTexto};
    color: ${cores.vermelhoClaro};
    cursor: pointer;
  }
`

export const OrderConfirm = styled(CartContainer)`
  display: flex;
`