import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'

import { RootReducer } from '../../store/'
import { close, orderOpen, remove } from '../../store/reducers/cart'

import { parseToBrl } from '../MenuList'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const openOrder = () => {
    dispatch(orderOpen())
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h4>{item.nome}</h4>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button">
                      <FaRegTrashAlt />
                    </button>
                  </S.CartItem>
                ))}
              </ul>
              <S.ValorTotal>
                <p>Valor total :</p>
                <span>{parseToBrl(getTotalPrice())}</span>
              </S.ValorTotal>
              <S.CartButtons>
                <S.Button onClick={openOrder}>Continuar com a entrega</S.Button>
                <S.Button className="display-button" onClick={closeCart}>
                  Voltar ao cardápio
                </S.Button>
              </S.CartButtons>
            </>
          ) : (
            <>
              <p className="empty-text ">
                O que está esperando? <br />
                Não fique com fome, faça logo seu pedido!{' '}
              </p>
            </>
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
