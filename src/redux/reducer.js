/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
import {
  ADMIN_TO_USER,
  GET_ALL_BOOKS,
  GET_ALL_USERS,
  GET_BOOK_BY_ID,
  SEARCH_USER_BY_NAME,
  SEARCH_AUTHOR_BY_NAME,
  USER_TO_ADMIN,
  GET_ALL_GENRES,
  GET_BOOKS_NAME,
  GET_ALL_BOOKS_COPY,
  GET_BOOKS_BY_NAME,
  UPDATE_BOOK,
  GET_ALL_AUTHORS,
  GET_BOOK_BY_AVAILABILITY,
  GET_BOOK_BY_NAME_AUTHOR,
  GET_BOOK_BY_OFFER,
  DELETE_BOOK,
  STOP_BOOK,
  RESTORE_BOOK,
  GET_ALL_BOOKS_OFFER,
  GET_REVIEW_BY_ID,
  GET_CART_USER,
  UPDATE_QUANTITY,
  DELETE_CART,
  POST_CART,
  DELETE_ALL_CART,
  GET_SALE_BY_USER,
  GET_USER_BY_ID,
  GET_ALL_FAVORITES,
  UPDATE_USER,
  GET_ALL_CONTACT,
  DELETE_MESSAGE,
  GET_ALL_SALE,
} from './types'

const initialState = {
  books: [],
  genres: [],
  detail: [],
  bookById: [],
  reviews: [],
  authors: [],
  users: [],
  user: [],
  searchs: [],
  booksSearch: [],
  bookNameAuthor: [],
  cart: [],
  sale: [],
  favorites: [],
  contact:[],
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
    case GET_ALL_BOOKS_OFFER:
      return { ...state, books: action.payload }
    case GET_ALL_SALE:
      return {...state, sale :action.payload}
    case GET_BOOK_BY_AVAILABILITY:
      return { ...state, books: action.payload }
    case GET_BOOK_BY_NAME_AUTHOR:
      return { ...state, bookNameAuthor: action.payload }
    case GET_BOOK_BY_ID:
      return { ...state, bookById: action.payload }
    case GET_REVIEW_BY_ID:
      return { ...state, reviews: action.payload }
    case GET_BOOK_BY_OFFER:
      return { ...state, books: action.payload }
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
    case GET_ALL_FAVORITES:
      return{
        ...state,
        favorites: action.payload
      }
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case SEARCH_USER_BY_NAME:
      return { ...state, users: action.payload }
    case USER_TO_ADMIN:
      return { ...state, users: action.payload }
    case ADMIN_TO_USER:
      return { ...state, users: action.payload }

    case DELETE_BOOK:
      const bookDeleted = {
        count: state.books.count,
        rows: state.books.rows.filter((book) => book.id !== action.payload),
      }
      return {
        ...state,
        books: bookDeleted,
      }
    case DELETE_MESSAGE: 
    return{
      ...state,
      contact: state.contact.filter((contact) => contact.id !== action.payload)
    }
    case UPDATE_BOOK:
      const bookUpdate = {
        count: state.books.count,
        rows: state.books.rows.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      }
      return {
        ...state,
        books: bookUpdate,
      }
    case UPDATE_USER:
      return{
        ...state,
        users: state.users.map((user) => 
        user.id === action.payload.id ? action.payload : user) 
        
      }
    case STOP_BOOK:
      const stopedBook = state.books.rows.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            availability: false,
          }
        }
        return book
      })

      const booksWithAvailabilityChanged = {
        count: state.books.count,
        rows: stopedBook,
      }

      return {
        ...state,
        books: booksWithAvailabilityChanged,
      }
    case RESTORE_BOOK:
      const restoreBook = state.books.rows.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            availability: true,
          }
        }
        return book
      })

      const bookRestored = {
        count: state.books.count,
        rows: restoreBook,
      }

      return {
        ...state,
        books: bookRestored,
      }
    case GET_BOOKS_BY_NAME:
      return { ...state, booksSearch: action.payload }
    case GET_CART_USER:
      return { ...state, cart: action.payload }
    case UPDATE_QUANTITY:
      const { id, quantity, price } = action.payload
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity,
            price: price,
          }
        }
        return item
      })
      return { ...state, cart: updatedCart }
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((ele) => ele.book.id !== action.payload),
      }
    case DELETE_ALL_CART:
      return {
        ...state,
        cart: [],
      }
    case SEARCH_AUTHOR_BY_NAME:
      return { ...state, authors: action.payload }
    case POST_CART:
      return {
        ...state,
        cart:
          action.payload.quantity > 1
            ? [...state.cart]
            : [...state.cart, action.payload],
      }

    case GET_SALE_BY_USER:
      return { ...state, sale: action.payload }
    case GET_USER_BY_ID:
      return { ...state, user: action.payload }

    case GET_REVIEW_BY_ID:
      return { ...state, reviews: action.payload }
    case GET_ALL_CONTACT:
        return {...state, contact: action.payload}
      default:
      return state
  }
}

export default rootReducer
