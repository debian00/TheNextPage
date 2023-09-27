import { GET_ALL_BOOKS, GET_BOOK_BY_ID } from "./types"
import { useDispatch, useSelector } from "react-redux";


const initialState = {
  books: [],
  detail: [],
  bookById:[]
,}

const rootReducer = (state = initialState, action) => {
  switch (action.type){
      
      case GET_ALL_BOOKS: 
          return {...state, books: action.payload}

      case GET_BOOK_BY_ID:
          return{...state, bookById:action.payload}
          default:
          return state;
  }
}

export default rootReducer
