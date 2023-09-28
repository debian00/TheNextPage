import { GET_ALL_BOOKS, GET_AUTHOR_NAME, GET_BOOK_BY_ID } from './types'

const initialState = {
  books: [],
  detail: [],
  bookById: [],
  authors: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return { ...state, books: action.payload }

    case GET_BOOK_BY_ID:
      return { ...state, bookById: action.payload }
    case GET_AUTHOR_NAME:
      return { ...state, authors: action.payload }
    default:
      return state
  }
}

export default rootReducer
