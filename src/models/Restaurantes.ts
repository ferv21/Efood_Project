class Restaurantes {
  id: number
  image: string
  title: string
  types: string[]
  rating: number
  description: string

  constructor(
    id: number,
    image: string,
    title: string,
    types: string[],
    rating: number,
    description: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.types = types
    this.rating = rating
    this.description = description
  }
}

export default Restaurantes
