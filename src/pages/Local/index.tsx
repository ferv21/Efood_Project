import CardapioLista from '../../components/CardapioLista'
import HeaderRestaurante from '../../components/HeaderRestaurantes'

import Cart from '../../components/Cart'
import { useGetCardapioQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import Checkout from '../../components/Checkout'

const Local = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)
  if (!cardapio) {
    return (
      <>
        <h3>Carregando...</h3>
      </>
    )
  }
  return (
    <>
      <HeaderRestaurante />
      <CardapioLista />
      <Cart />
      <Checkout />
    </>
  )
}

export default Local
