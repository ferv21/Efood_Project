import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  padding-top: 56px;

  @media (max-width: ${breakpoints.cellphone}) {
    grid-template-columns: 1fr;
    padding: 24px;
    img {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding: 24px;
    img {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 56px 0 0 0;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: none;
  align-items: center;
  justiy-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  .container {
    position: relative;
  }

  header {
    display: flex;
    justify-content: end;
    padding: 8px;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelhoClaro};
  position: relative;
  z-index: 1;

  > div {
    display: flex;
    padding: 0px 32px 32px 32px;
    @media (max-width: ${breakpoints.cellphone}) {
      flex-direction: column;
      align-items: center;
    }
    img {
      object-fit: cover;
      height: 280px;
      width: 280px;
      @media (max-width: ${breakpoints.cellphone}) {
        padding-bottom: 16px;
      }
    }

    div {
      margin-left: 24px;
      h4 {
        font-size: 18px;
        font-weight: 900;
      }

      p {
        margin-top: 16px;
        margin-bottom: 24px;
        font-size: 14px;
        line-height: 22px;
      }

      button {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        padding: 4px 8px;
        border: none;
        color: ${cores.vermelhoClaro};
        background-color: ${cores.corTexto};
        cursor: pointer;
      }
    }
  }
`
