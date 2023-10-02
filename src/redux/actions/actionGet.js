import axios from 'axios'
import {
  GET_ALL_BOOKS,
  GET_ALL_GENRES,
  GET_AUTHOR_NAME,
  GET_BOOKS_NAME,
  GET_BOOK_BY_ID,
  GET_ALL_USERS,
  SEARCH_USER_BY_NAME,
  GET_ALL_BOOKS_COPY,
  GET_BOOKS_BY_NAME,
  GET_ALL_AUTHORS,
} from '../types'

export const getAllBooks = ({
  priceMin,
  priceMax,
  page,
  genre,
  order,
  author,
}) => {
  if (priceMax == 0) priceMax = ''
  if (priceMin == 0) priceMin = ''

  const genresId = genre.join(',')
  console.log(priceMax, priceMin)
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `/books?page=${page}&size=10&sellPriceMin=${priceMin}&sellPriceMax=${priceMax}&genre=${genresId}&order=${order}&author=${author}`
      )
      console.log(data)
      return dispatch({
        type: GET_ALL_BOOKS,
        payload: { books: data.rows, currentPage: page },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllBooksCopy = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/books?page=${page}`)
      return dispatch({
        type: GET_ALL_BOOKS_COPY,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getBookById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/books/' + id)
      return dispatch({
        type: GET_BOOK_BY_ID,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAuthors = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/author')
      dispatch({
        type: GET_ALL_AUTHORS,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAuthorSearch = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/author?name=' + search)
      console.log(data.name)
      dispatch({
        type: GET_AUTHOR_NAME,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/users')
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getBooksSearch = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/books/search?title=' + search)
      console.log(data.title)
      dispatch({
        type: GET_BOOKS_NAME,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getBooksByName = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/books/search?title=' + search)
      console.log(data.title)
      dispatch({
        type: GET_BOOKS_BY_NAME,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const searchUserByName = (name, email) => {
  if (!name) name = ''
  if (!email) email = ''
  return async function (dispatch) {
    try {
      const { data } = await axios(`/users/search?name=${name}&email=${email}`)
      return dispatch({
        type: SEARCH_USER_BY_NAME,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/genre')
      dispatch({
        type: GET_ALL_GENRES,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
