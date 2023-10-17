import axios, { AxiosError } from 'axios'
import { auth } from './firebase.js'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  linkWithPopup,
} from 'firebase/auth'
import { UNSAFE_DataRouterContext } from 'react-router'
import { showSuccessNotification } from '../../utils/Toast.jsx'
import { POST_CART, POST_REVIEW } from '../types.js'

export const createBook = (form) => {
  const { images } = form
  return async () => {
    try {
      const { data } = await axios.post('/books/create', form, {
        images: [images],
      })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }
}

export const postAuthor = (name) => {
  return async () => {
    try {
      const { data } = await axios.post('/author/create', { name })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }
}

export const postGenre = (name) => {
  return async () => {
    try {
      const { data } = await axios.post('/genre/create', { name })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }
}

export const postPromotion = (email) => {
  return async () => {
    try {
      const { data } = await axios.post('/sendmail', { to: email })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }
}

export const CreateUser = async (register, setModal, navigate) => {
  try {
    const { data } = await axios.post('/users/create', register)
    console.log('si Register')

    data.success === true
      ? setModal({ access: true, body: data.data })
      : setModal({ access: false, body: data.data })
    localStorage.setItem('token', JSON.stringify(data.registrationToken))
    localStorage.setItem('user', JSON.stringify(data.data))
    localStorage.removeItem('registration')

    setTimeout(() => {
      setModal(false)
      navigate('/home')
    }, 1500)
    return
  } catch (error) {
    console.log(error)
    setModal({ access: true, body: error.message })
    setTimeout(() => {
      setModal({ access: false })
    }, 1000)
    return error
  }
}

export const getLogin = async (login, setModal, navigate, provider) => {
  try {
    const { data } = await axios.post('/login', login)
    var finalUser
    data.success
      ? provider
        ? ((finalUser = Object.assign({}, data.data, provider)),
          setModal({ access: true, body: provider }),
          localStorage.setItem('token', data.token),
          localStorage.setItem('user', JSON.stringify(finalUser)),
          setTimeout(() => {
            navigate('/home')
            setModal({ access: false })
          }, 1500),
          console.log(finalUser))
        : (setModal({ access: true, body: data.data }),
          localStorage.setItem('token', data.token),
          localStorage.setItem('user', JSON.stringify(data.data)),
          setTimeout(() => {
            navigate('/home')
            setModal({ access: false })
          }, 1500))
      : setModal({ access: true, body: data.msg })
    setTimeout(() => {
      setModal({ access: false })
    }, 1500)
  } catch (error) {
    setModal({ access: true, body: error.response.data })
    setTimeout(() => {
      setModal({ access: false })
    }, 1000)
    return error
  }
}

export const handleGoogleLogin = async (setModal, navigate) => {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    /* if(( result.user.providerData[0]?.providerId !== "google.com")) */
    console.log(result)
    const userInfo = result._tokenResponse

    const obj = {
      userName: userInfo.displayName,
      profilePic: userInfo.photoUrl,
      email: userInfo.email,
      fullName: userInfo.fullName,
      password: 'AAdsadsad1321321',
    }
    console.log(userInfo, obj)

    try {
      const { data } = await axios('/users')
      const userExists = data.some((user) => user.email === obj.email)
      if (userExists) {
        await getLogin(obj, setModal, navigate, obj)
      } else {
        await CreateUser(obj, setModal, navigate, obj)
      }
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(error)
  }
}

export const handleGitHubLogin = async (setModal, navigate) => {
  try {
    const provider = new GithubAuthProvider()

    if (
      auth.currentUser === null ||
      auth.currentUser?.providerData.filter(
        (p) => p.providerId === 'github.com'
      )
    ) {
      const result = await signInWithPopup(auth, provider)
      const obj = {
        userName: result._tokenResponse.screenName,
        profilePic: result._tokenResponse.photoUrl,
        email: result._tokenResponse.email,
        fullName: result._tokenResponse.fullName,
        password: 'AAdsadsad1321321',
      }

      try {
        await getLogin(obj, setModal, navigate, obj)
      } catch (error) {
        await CreateUser(obj, setModal, navigate, obj)
      }
    }

    const result2 = await linkWithPopup(auth.currentUser, provider)

    const obj = {
      userName: result2._tokenResponse.screenName,
      profilePic: result2._tokenResponse.photoUrl,
      email: result2._tokenResponse.email,
      fullName: result2._tokenResponse.fullName,
      password: 'AAdsadsad1321321',
    }
    try {
      await getLogin(obj, setModal, navigate, obj)
    } catch (error) {
      await CreateUser(obj, setModal, navigate, obj)
    }
  } catch (error) {
    console.log(error)
  }
}
export const createReviews = (form) => {
  return async () => {
    try {
      const { data } = await axios.post('/review/create', form)
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }
}

export const cartAnonymous = (id, allBooks) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
  const bookLocal = allBooks.find((ele) => ele.id == id)
  const existingBook = cartFromLocalStorage.find(
    (book) => book.book.id === bookLocal.id
  )
  console.log(existingBook)
  const bookObj = {
    isLocal: true,
    quantity: 1,
    price: bookLocal.sellPrice,
    book: bookLocal,
  }

  if (!existingBook) {
    cartFromLocalStorage.push(bookObj)
    localStorage.setItem('cart', JSON.stringify(cartFromLocalStorage))
  } else {
    existingBook.quantity++
    localStorage.setItem('cart', JSON.stringify(cartFromLocalStorage))
  }
}

export const postCart = (userId, bookId) => async (dispatch) => {
  const { data } = await axios.post(`/cart/add/${userId}`, { bookId })
  console.log(data)
  return dispatch({
    type: POST_CART,
    payload: data,
  })
}

export const postReview = (review) => async (dispatch) => {
  const { data } = await axios.post('review/create', review)
  console.log(data)
  return dispatch({
    type: POST_REVIEW,
    payload: data,
  })
}

export const createContact = async (form) => {
  try {
    const { data } = await axios.post("/contact/", form);
    alert("Enviado con exito", data);
  } catch (error) {
    console.error(error);
  }
};

