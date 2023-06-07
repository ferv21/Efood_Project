import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../../services/api'

import MenuList from '../../components/MenuList'
import HeaderRestaurant from '../../components/HeaderRestaurantes'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Loader from '../../components/Loader'

const Local = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)
  if (!cardapio) {
    return <Loader />
  }
  return (
    <>
      <HeaderRestaurant />
      <MenuList />
      <Cart />
      <Checkout />
    </>
  )
}

export default Local
