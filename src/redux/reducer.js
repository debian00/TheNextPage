/* eslint-disable no-case-declarations */
import {
  GET_ALL_BOOKS,
  GET_ALL_GENRES,
  GET_BOOKS_NAME,
  GET_BOOK_BY_ID,
} from './types'

const initialState = {
  books: [],
  genres: [],
  detail: [],
  bookById: [],
  authors: [],
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
    default:
      return state
  }
}

export default rootReducer
