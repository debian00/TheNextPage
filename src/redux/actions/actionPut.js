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
export const updateUser = (form, id, setModal ) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/users/update/${id}`, form)
      dispatch({
        type: UPDATE_USER,
        payload: data,
      })
      data.id 
      ? setModal({ access: true, body: data })
      : setModal({ access: false, body: data })
      localStorage.removeItem("user");
      localStorage.setItem('user', JSON.stringify(data))
    
    setTimeout(() => {
      setModal(false)
    }, 1500)
    return
    } catch (error) {
      setModal({ access: true, body: error.response.data})
      setTimeout(() => {
        setModal({ access: false })
      }, 1000)
      return error
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