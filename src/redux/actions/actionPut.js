import axios from 'axios'
import { UPDATE_BOOK, UPDATE_USER } from '../types'

export const updateBook = (form, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/books/update/${id}`, form)
      dispatch({
        type: UPDATE_BOOK,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateUser = (id, form) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/users/update/${id}`, form)
      dispatch({
        type: UPDATE_USER,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addFavorite = (userId, bookId) => {
  return async () => {
    try {
      const { data } = await axios.put(`/favorites/like`, { userId, bookId });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteFavorite =(userId, bookId) => {
  return async () => {
    try {
      const { data } = await axios.put(`/favorites/unlike`, { userId, bookId });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}