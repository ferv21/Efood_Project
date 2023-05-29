import ListaRestaurantes from '../../components/ListaRestaurantes'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <ListaRestaurantes restaurantes={restaurante} />
      </div>
    </>
  )
}

export default Home
