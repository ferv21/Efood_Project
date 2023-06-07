import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.vermelhoClaro};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0px 8px;
  z-index: 1;

  height: 100vh;
  overflow-y: scroll;

  .empty-text {
    font-size: 16px;
    line-height: 22px;
    color: ${cores.corTexto};
    text-align: center;
  }
`
export const CartItem = styled.li`
  background-color: ${cores.corTexto};
  color: ${cores.vermelhoClaro};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  img {
    height: 80px;
    width: 80px;
    margin-right: 8px;
    object-fit: cover;
  }
  h4 {
    font-weight: 900;
    padding-bottom: 16px;
  }
  button {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 16px;
    cursor: pointer;
    color: ${cores.vermelhoClaro};
  }
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.corTexto};
  font-weight: bold;
  margin-top: 40px;
`
export const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 4px 0;
  border: none;
  font-weight: bold;
  background-color: ${cores.corTexto};
  color: ${cores.vermelhoClaro};
  cursor: pointer;
`
export const CartButtons = styled.div`
  padding-bottom: 24px;

  .display-button {
    display: none;

    @media (max-width: ${breakpoints.cellphone}) {
      display: block;
    }
  }
`
