import axios from 'axios'
import { GET_ALL_BOOKS, GET_AUTHOR_NAME, GET_BOOK_BY_ID, GET_ALL_USERS, SEARCH_USER_BY_NAME} from '../types'

export const getAllBooks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`/books`)
      return dispatch({
        type: GET_ALL_BOOKS,
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

export const getAuthorSearch = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios('/author?name=' + search)
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
  return async(dispatch) => {
    try {
      const {data} = await axios('/users')
      dispatch({
        type:GET_ALL_USERS,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const searchUserByName = (name, email) => {
  if (!name) name=''
  if (!email) email=''
  return async function (dispatch) {
    try {
      const {data} = await axios(`/users/search?name=${name}&email=${email}`)
      return dispatch({
        type:SEARCH_USER_BY_NAME,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}