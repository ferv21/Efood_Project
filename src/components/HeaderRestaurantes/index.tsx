import { BannerImg } from '../Header/styles'
import {
  BannerRestaurante,
  HeaderContent,
  ListaRestaurantes,
  LogoRestaurante,
  TituloRestaurante,
  TagTipo
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
      <div className="container">
        <HeaderContent>
          <LogoRestaurante>
            <img src={Logo} alt="logo efood" />
          </LogoRestaurante>
          <div>
            <ListaRestaurantes>
              <h3>Restaurantes</h3>
              <h3>{produtos} produto(s) no carrinho</h3>
            </ListaRestaurantes>
          </div>
        </HeaderContent>
      </div>
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
