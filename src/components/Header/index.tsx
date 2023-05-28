import { BannerImg, HeaderContainer, LogoEfood, Titulo } from './styles'
import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <>
    <BannerImg style={{ backgroundImage: `url(${background})` }}>
      <HeaderContainer>
        <LogoEfood to={'/'}>
          <img src={logo} alt="logo efood" />
        </LogoEfood>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </HeaderContainer>
    </BannerImg>
  </>
)

export default Header
