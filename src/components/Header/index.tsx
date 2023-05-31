import * as S from './styles'
import background from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <>
    <S.BannerImg style={{ backgroundImage: `url(${background})` }}>
      <S.HeaderContainer>
        <S.LogoEfood to={'/'}>
          <img src={logo} alt="logo efood" />
        </S.LogoEfood>
        <S.Titulo>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Titulo>
      </S.HeaderContainer>
    </S.BannerImg>
  </>
)

export default Header
