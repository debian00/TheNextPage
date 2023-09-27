import axios, {Axios} from "axios"
import { GET_ALL_BOOKS, GET_BOOK_BY_ID } from "../types"

export const getAllBooks= () => {
    return async (dispatch) => {
      try {
        const { data } = await axios(`/books/:id`);
        return dispatch({
          type: GET_ALL_BOOKS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const getBookById = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios("/books/" + id);
        return dispatch({
          type: GET_BOOK_BY_ID,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };