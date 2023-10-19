import axios from 'axios'
import {
  DELETE_ALL_CART,
  DELETE_BOOK,
  DELETE_CART,
  DELETE_MESSAGE,
  DELETE_REVIEW,
} from '../types'

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
    await axios.delete(`/cart/delete/${id}/${bookId}`)
    dispatch({
      type: DELETE_CART,
      payload: bookId,
    })
  } catch (error) {
    console.log(error)
  }
}
export const deleteAllCart = (id) => async (dispatch) => {
  try {
    await axios.delete(`/cart/deleteAll/${id}`)
    dispatch({
      type: DELETE_ALL_CART,
      payload: [],
    })
  } catch (error) {
    console.log(error)
  }
}
export const deleteMessageById = (id) => {
  return async (dispatch) => {
    try {
      // Realiza la solicitud de eliminación al servidor
      await axios.delete(`/contact/${id}`)
      dispatch({
        type: DELETE_MESSAGE,
        payload: id,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteReview = (id) => async (dispatch) => {
  axios.delete(`/review/delete/${id}`)
  dispatch({
    type: DELETE_REVIEW,
    payload: id,
  })
}
