import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoClaro: '#E66767',
  corTexto: '#FFEBD9',
  corFundo: '#FFFFFF'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color:#FFF8F2;
  }
  .container{
    max-width:1024px;
    width:100%;
    margin:0 auto;
  }

`

export default GlobalCss
