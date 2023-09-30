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

} from './types'

const initialState = {
  books: [],
  genres: [],
  detail: [],
  bookById: [],
  authors: [],
  users: [],
  searchs: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      const existingBookIds = new Set(state.books.map((book) => book.id))

      const newBooks = action.payload.rows.filter(
        (book) => !existingBookIds.has(book.id)
      )

      const updatedBooks = [...state.books, ...newBooks]
      return { ...state, books: updatedBooks }

    case GET_ALL_BOOKS_COPY:
      return { ...state, books: action.payload }

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
        searchs: action.payload.map((ele) => ele.title),
      }
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      }
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case SEARCH_USER_BY_NAME:
      return { ...state, users: action.payload }
    case USER_TO_ADMIN:
      return { ...state, users: action.payload }
    case ADMIN_TO_USER:
      return { ...state, users: action.payload }
    
      default:
      return state
  }
}

export default rootReducer
