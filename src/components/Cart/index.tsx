import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { FaRegTrashAlt } from 'react-icons/fa'
import { RootReducer } from '../../store/'
import { close, orderOpen, remove } from '../../store/reducers/cart'
import { conversaoReal } from '../CardapioLista'

const Cart = () => {
  const { isOpen, isOrderOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const openOrder = () => {
    dispatch(orderOpen())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                  <h4>{item.nome}</h4>
                  <span>{conversaoReal(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button">
                  <FaRegTrashAlt />
                </button>
              </S.CartItem>
            ))}
          </ul>
          <S.ValorTotal>
            <p>Valor total :</p>
            <span>{conversaoReal(getTotalPrice())}</span>
          </S.ValorTotal>
          <S.Button onClick={openOrder}>Continuar com a entrega</S.Button>
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
