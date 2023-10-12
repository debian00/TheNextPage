import axios from 'axios'
import { DELETE_BOOK, DELETE_CART } from '../types'

export const deleteUserById = (id) => {
  return async () => {
    try {
      const { data } = await axios.delete('/users/delete/' + id)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteBookById = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete('/books/delete/' + id)
      dispatch({
        type: DELETE_BOOK,
        payload: id,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteCart = (id, bookId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/cart/delete/${id}/${bookId}`)
    dispatch({
      type: DELETE_CART,
      payload: bookId,
    })
  } catch (error) {
    console.log(error)
  }
}
