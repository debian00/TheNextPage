import {
  ADMIN_TO_USER,
  GET_ALL_BOOKS,
  GET_ALL_USERS,
  GET_AUTHOR_NAME,
  GET_BOOK_BY_ID,
  SEARCH_USER_BY_NAME,
  USER_TO_ADMIN,
} from './types'

const initialState = {
  books: [],
  detail: [],
  bookById: [],
  authors: [],
  users: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return { ...state, books: action.payload }
    case GET_BOOK_BY_ID:
      return { ...state, bookById: action.payload }
    case GET_AUTHOR_NAME:
      return { ...state, authors: action.payload }
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
