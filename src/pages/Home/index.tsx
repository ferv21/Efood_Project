import ListaRestaurantes from '../../components/ListaRestaurantes'
import Sushi from '../../assets/images/hiokisushi.png'
import Italiana from '../../assets/images/italiana.png'
import Regional from '../../assets/images/regional.jpg'
import Header from '../../components/Header'

const ListaDosRestaurantes = [
  {
    id: 1,
    image: Sushi,
    title: 'Hioki Sushi',
    types: ['Destaque da semana', 'Japonesa'],
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    button: 'Saiba mais'
  },
  {
    id: 2,
    image: Italiana,
    title: 'La Dolce Vita Trattoria',
    types: ['Italiana'],
    rating: 4.6,
    description:
      'Bem-vindo ao La Dolce Vita Trattoria! Oferecemos uma experiência culinária autêntica, repleta de sabores italianos irresistíveis. Com um ambiente encantador e um menu cuidadosamente elaborado.'
  },
  {
    id: 3,
    image: Regional,
    title: 'Hioki Sushi',
    types: ['Japonesa'],
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 4,
    image: Regional,
    title: 'Hioki Sushi',
    types: ['Japonesa'],
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 5,
    image: Sushi,
    title: 'Hioki Sushi',
    types: ['Destaque da semana', 'Japonesa'],
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    button: 'Saiba mais'
  },
  {
    id: 6,
    image: Italiana,
    title: 'La Dolce Vita Trattoria',
    types: ['Italiana'],
    rating: 4.6,
    description:
      'Bem-vindo ao La Dolce Vita Trattoria! Oferecemos uma experiência culinária autêntica, repleta de sabores italianos irresistíveis. Com um ambiente encantador e um menu cuidadosamente elaborado.'
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ListaRestaurantes restaurantes={ListaDosRestaurantes} />
      </div>
    </>
  )
}

export default Home
