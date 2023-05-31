import { BannerImg } from '../Header/styles'
import * as S from './styles'
import background from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { useGetBannerQuery } from '../../services/api'
import { RootReducer } from '../../store'

const HeaderRestaurante = () => {
  const { id } = useParams()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(open())
  }
  const { data: bannerRestaurante } = useGetBannerQuery(id!)

  if (!bannerRestaurante) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <BannerImg style={{ backgroundImage: `url(${background})` }}>
        <S.HeaderContent>
          <S.Restaurant to={'/'}>Restaurantes</S.Restaurant>
          <S.LogoRestaurante to={'/'}>
            <img src={Logo} alt="logo efood" />
          </S.LogoRestaurante>
          <S.Carrinho onClick={addToCart}>
            {items.length} produto(s) no carrinho
          </S.Carrinho>
        </S.HeaderContent>
      </BannerImg>

      <S.BannerRestaurante
        style={{ backgroundImage: `url(${bannerRestaurante?.capa})` }}
      >
        <div className="container">
          <S.TagTipo>{bannerRestaurante.tipo}</S.TagTipo>
          <S.TituloRestaurante>
            <h1>{bannerRestaurante.titulo}</h1>
          </S.TituloRestaurante>
        </div>
      </S.BannerRestaurante>
    </>
  )
}

export default HeaderRestaurante
