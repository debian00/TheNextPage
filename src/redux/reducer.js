/* eslint-disable no-case-declarations */
import {
  ADMIN_TO_USER,
  GET_ALL_BOOKS,
  GET_ALL_USERS,
  GET_BOOK_BY_ID,
  SEARCH_USER_BY_NAME,
  USER_TO_ADMIN,
  GET_ALL_GENRES,
  GET_BOOKS_NAME,
  GET_ALL_BOOKS_COPY,
  GET_BOOKS_BY_NAME,
  UPDATE_BOOK,
  GET_ALL_AUTHORS,
  GET_BOOK_BY_AVAILABILITY,
  GET_BOOK_BY_NAME_AUTHOR,
} from './types'

const initialState = {
  books: [],
  genres: [],
  detail: [],
  bookById: [],
  authors: [],
  users: [],
  searchs: [],
  booksSearch: [],
  bookNameAuthor: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      const { books: newBooks, currentPage } = action.payload
      let updatedBooks

      if (currentPage === 1) {
        // Si es la primera página, reemplaza los libros existentes con los nuevos resultados
        updatedBooks = newBooks
      } else {
        // Si no es la primera página, concatena los nuevos resultados con los libros existentes
        updatedBooks = [...state.books, ...newBooks]
      }

      return {
        ...state,
        books: updatedBooks,
      }
    case GET_ALL_BOOKS_COPY:
      return { ...state, books: action.payload }
    case GET_BOOK_BY_AVAILABILITY:
        return{ ...state, books:action.payload}
    case GET_BOOK_BY_NAME_AUTHOR:
        return{ ...state, bookNameAuthor: action.payload }
    case GET_BOOK_BY_ID:
      return { ...state, bookById: action.payload }
    // case GET_AUTHOR_NAME:
    //   return {
    //     ...state,
    //     searchs: [...action.payload.map((ele) => ele.name)],
    //   }
    case GET_BOOKS_NAME:
      return {
        ...state,
        searchs: action.payload,
      }
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      }
    case GET_ALL_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      }
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case SEARCH_USER_BY_NAME:
      return { ...state, users: action.payload }
    case USER_TO_ADMIN:
      return { ...state, users: action.payload }
    case ADMIN_TO_USER:
      return { ...state, users: action.payload }

    case GET_BOOKS_BY_NAME:
      return { ...state, booksSearch: action.payload }
    case UPDATE_BOOK:
      return { ...state, books: action.payload }
    
    default:
      return state
  }
}

export default rootReducer
