import { BrowserRouter } from 'react-router-dom'

import GlobalCss from './styles'
import Rotas from './routes'
import FooterEfood from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <FooterEfood />
      </BrowserRouter>
    </>
  )
}

export default App
