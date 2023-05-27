import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare
} from 'react-icons/fa'
import { Footer, Logo, Icons, Descricao } from './styles'
import LogoEfood from '../../assets/images/logo.png'

const FooterEfood = () => {
  return (
    <>
      <Footer>
        <div>
          <Logo>
            <img src={LogoEfood} alt="logo efood" />
          </Logo>
          <Icons>
            <FaInstagramSquare />
            <FaFacebookSquare />
            <FaTwitterSquare />
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
