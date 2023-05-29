import CardapioLista from '../../components/CardapioLista'
import HeaderRestaurante from '../../components/HeaderRestaurantes'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurantes } from '../Home'

const Local = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurante />
      <CardapioLista />
    </>
  )
}

export default Local
