import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { useGetBannerQuery } from '../../services/api'
import { RootReducer } from '../../store'

import { BannerImg } from '../Header/styles'

import * as S from './styles'
import background from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'
import Loader from '../Loader'

const HeaderRestaurante = () => {
  const { id } = useParams()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(open())
  }
  const { data: bannerRestaurante } = useGetBannerQuery(id!)

  if (!bannerRestaurante) {
    return <Loader />
  }

  return (
    <>
      <BannerImg style={{ backgroundImage: `url(${background})` }}>
        <S.HeaderContent>
          <S.Restaurant to={'/'}>Restaurantes</S.Restaurant>
          <S.LogoRestaurant to={'/'}>
            <img src={Logo} alt="logo efood" />
          </S.LogoRestaurant>
          <S.Cart onClick={addToCart}>
            {items.length} produto(s) no carrinho
          </S.Cart>
        </S.HeaderContent>
      </BannerImg>

      <S.BannerRestaurant
        style={{ backgroundImage: `url(${bannerRestaurante?.capa})` }}
      >
        <div className="container">
          <S.TagType>{bannerRestaurante.tipo}</S.TagType>
          <S.RestaurantTitle>
            <h1>{bannerRestaurante.titulo}</h1>
          </S.RestaurantTitle>
        </div>
      </S.BannerRestaurant>
    </>
  )
}

export default HeaderRestaurante
