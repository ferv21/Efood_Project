import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './styles'
import LogoEfood from '../../assets/images/logo.png'

const FooterEfood = () => {
  return (
    <>
      <S.Footer>
        <div>
          <S.Logo to={'/'}>
            <img src={LogoEfood} alt="logo efood" />
          </S.Logo>
          <S.Icons>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </S.Icons>
          <S.Description>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </S.Description>
        </div>
      </S.Footer>
    </>
  )
}

export default FooterEfood
