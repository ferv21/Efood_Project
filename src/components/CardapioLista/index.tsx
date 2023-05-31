import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Cardapio from '../Cardapio'
import { Listagem, Modal, ModalContent } from './styles'
import close from '../../assets/images/botaoFechar.png'
import { add, open } from '../../store/reducers/cart'
import { useGetCardapioQuery } from '../../services/api'

export type CardapioItem = {
  id: number
  foto: string
  titulo: string
  descricao: string
  preco: number
  porcao: string
  nome: string
}

export const conversaoReal = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardapioLista = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)

  const [modalAberta, setModalAberta] = useState(false)
  const [itemCardapio, setItemCardapio] = useState<CardapioItem>()

  function abrirModal(item: CardapioItem) {
    setModalAberta(true)
    setItemCardapio(item)
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    if (itemCardapio) {
      dispatch(add(itemCardapio))
      dispatch(open())
    }
  }

  if (!cardapio) {
    return (
      <>
        <h4>Carregando...</h4>
      </>
    )
  }

  return (
    <>
      <Listagem className="container">
        {cardapio.map((item) => (
          <li key={item.id} onClick={() => abrirModal(item)}>
            <Cardapio
              image={item.foto}
              name={item.titulo}
              description={item.descricao}
            />
          </li>
        ))}
      </Listagem>
      <Modal className={modalAberta ? 'visivel' : ''}>
        <div className="container">
          <ModalContent>
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
                  <span> {conversaoReal(itemCardapio?.preco)}</span>
                </button>
              </div>
            </div>
          </ModalContent>
        </div>
        <div className="overlay" onClick={() => setModalAberta(false)}></div>
      </Modal>
    </>
  )
}
export default CardapioLista
