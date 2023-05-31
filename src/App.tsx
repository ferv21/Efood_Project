import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalCss from './styles'
import Rotas from './routes'
import FooterEfood from './components/Footer'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <FooterEfood />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
