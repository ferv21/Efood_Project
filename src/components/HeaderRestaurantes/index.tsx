import { BannerImg } from '../Header/styles'
import {
  BannerRestaurante,
  HeaderContent,
  ListaRestaurantes,
  LogoRestaurante,
  TituloRestaurante,
  TagTipo,
  Restaurantes,
  Carrinho
} from './styles'
import background from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'
import banner from '../../assets/images/bannerRestaurante.png'

type Props = {
  produtos: number
  title: string
}

const HeaderRestaurante = ({ produtos, title }: Props) => (
  <>
    <BannerImg style={{ backgroundImage: `url(${background})` }}>
      <HeaderContent>
        <Restaurantes to={'/'}>Restaurantes</Restaurantes>
        <LogoRestaurante to={'/'}>
          <img src={Logo} alt="logo efood" />
        </LogoRestaurante>
        <Carrinho to={'/'}>{produtos} produto(s) no carrinho</Carrinho>
      </HeaderContent>
    </BannerImg>

    <BannerRestaurante style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <TagTipo>Italiana</TagTipo>
        <TituloRestaurante>
          <h1>{title}</h1>
        </TituloRestaurante>
      </div>
    </BannerRestaurante>
  </>
)

export default HeaderRestaurante
