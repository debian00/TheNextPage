const validation = (input) => {
  const error = {}

  if (!input.title) error.title = 'Falta un titulo'
  if (input.title.length < 5) error.title = 'Titulo muy corto'
  if (input.title.length > 30) error.title = 'Titulo muy largo'

  if (!input.genre) error.genre = 'Falta genero'

  if (!input.author) error.author = 'Falta autor'

  if (!input.publicationYear) error.publicationYear = 'Falta año de publicacion'
  if (/^\d{4}$/.test(input.publicationYear))
    error.publicationYear = 'Falta año de publicacion'

  if (!input.stock) error.stock = 'Falta stock'
  if (input.stock.length > 3) error.stock = 'Es mucho stock'

  if (!input.description) error.description = 'Agregue una descripcion'
  if (input.description.length < 10) error.description = 'Descripcion muy corta'
  if (input.description.length > 100)
    error.description = 'Descripcion muy larga'

  return error
}

export default validation
