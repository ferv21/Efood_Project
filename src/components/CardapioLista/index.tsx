import Cardapio from '../Cardapio'
import { Listagem, Modal, ModalContent } from './styles'
import close from '../../assets/images/botaoFechar.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface CardapioItem {
  id: string
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

  const [modalAberta, setModalAberta] = useState(false)
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])
  const [itemCardapio, setItemCardapio] = useState<CardapioItem>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  if (cardapio.length === 0) {
    return <h1>Carregando...</h1>
  }

  function abrirModal(item: CardapioItem) {
    setModalAberta(true)
    setItemCardapio(item)
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
                <button>
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
