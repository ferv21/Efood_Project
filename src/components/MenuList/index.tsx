import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { useGetCardapioQuery } from '../../services/api'

import Cardapio from '../Menu'

import * as S from './styles'

import close from '../../assets/images/botaoFechar.png'
import Loader from '../Loader'

export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuList = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)

  const [modalAberta, setModalAberta] = useState(false)
  const [itemCardapio, setItemCardapio] = useState<MenuItem>()

  function abrirModal(item: MenuItem) {
    setModalAberta(true)
    setItemCardapio(item)
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    if (itemCardapio) {
      dispatch(add(itemCardapio))
      dispatch(open())
      setModalAberta(false)
    }
  }

  if (!cardapio) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <>
      <S.List className="container">
        {cardapio.map((item) => (
          <li key={item.id} onClick={() => abrirModal(item)}>
            <Cardapio
              image={item.foto}
              name={item.titulo}
              description={item.descricao}
            />
          </li>
        ))}
      </S.List>
      <S.Modal className={modalAberta ? 'visivel' : ''}>
        <div className="container">
          <S.ModalContent>
            <header>
              <img
                src={close}
                alt="botao fechar"
                onClick={() => setModalAberta(false)}
              />
            </header>
            <div>
              <img src={itemCardapio?.foto} alt="" />
              <div>
                <h4>{itemCardapio?.nome}</h4>
                <p>{itemCardapio?.descricao}</p>
                <p>
                  Serve: <span>{itemCardapio?.porcao}</span>
                </p>
                <button onClick={addToCart}>
                  Adicionar ao carrinho
                  <span> {parseToBrl(itemCardapio?.preco)}</span>
                </button>
              </div>
            </div>
          </S.ModalContent>
        </div>
        <div className="overlay" onClick={() => setModalAberta(false)}></div>
      </S.Modal>
    </>
  )
}
export default MenuList
