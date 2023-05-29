import { BannerImg } from '../Header/styles'
import * as S from './styles'
import background from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'
import { Restaurantes } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HeaderRestaurante = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
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
          <S.Carrinho to={'/'}>0 produto(s) no carrinho</S.Carrinho>
        </S.HeaderContent>
      </BannerImg>

      <S.BannerRestaurante
        style={{ backgroundImage: `url(${restaurante.capa})` }}
      >
        <div className="container">
          <S.TagTipo>{restaurante.tipo}</S.TagTipo>
          <S.TituloRestaurante>
            <h1>{restaurante.titulo}</h1>
          </S.TituloRestaurante>
        </div>
      </S.BannerRestaurante>
    </>
  )
}

export default HeaderRestaurante
