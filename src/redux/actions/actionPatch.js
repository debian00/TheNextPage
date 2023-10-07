import axios from 'axios'
import { ADMIN_TO_USER, GET_BOOK_BY_OFFER, RESTORE_USER_BY_ID, STOP_USER_BY_ID, USER_TO_ADMIN } from '../types'


export const stopUserById = (id) => {
    return async(dispatch) => {
        try {
            const {data} = await axios.patch('/users/sleep/'+ id)
            dispatch({
                type: STOP_USER_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const restoreUserById = (id) => {
    return async(dispatch) => {
        try {
            const {data} = await axios.patch('/users/restore/'+ id)
            dispatch({
                type: RESTORE_USER_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const userToAdmin = (id) => {
    return async(dispatch)=> {
        try {
            const {data} = await axios.patch('/users/admin/'+id)
            dispatch({
                type: USER_TO_ADMIN,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const adminToUser = (id) => {
    return async(dispatch)=> {
        try {
            const {data} = await axios.patch('/users/noadmin/'+id)
            dispatch({
                type: ADMIN_TO_USER,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getBookByOffer = ({ page, forSale, order ,title} ) => {

    return async (dispatch) => {
      try {
        if (!title) title = ''
        const {data} = await axios(`/books?page=${page}&size=10&forSale=${forSale}&order=${order}&title=${title}`)
        dispatch({
          type: GET_BOOK_BY_OFFER,
          payload:data
        })
      } catch (error) {
        console.log(error);
      }
    }
  }