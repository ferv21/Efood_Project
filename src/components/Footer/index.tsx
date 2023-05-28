import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Footer, Logo, Icons, Descricao } from './styles'
import LogoEfood from '../../assets/images/logo.png'

const FooterEfood = () => {
  return (
    <>
      <Footer>
        <div>
          <Logo to={'/'}>
            <img src={LogoEfood} alt="logo efood" />
          </Logo>
          <Icons>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </Icons>
          <Descricao>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </Descricao>
        </div>
      </Footer>
    </>
  )
}

export default FooterEfood
