import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <>
    <S.BannerImg>
      <S.HeaderContainer>
        <S.LogoEfood to={'/'}>
          <img src={logo} alt="logo efood" />
        </S.LogoEfood>
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.HeaderContainer>
    </S.BannerImg>
  </>
)

export default Header
