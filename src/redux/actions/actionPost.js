import axios, { AxiosError } from 'axios';
//mport  {auth}  from "./firebase.js";
//import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UNSAFE_DataRouterContext } from 'react-router';

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
            const {data} = await axios.post('/author/create', {name})
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}

export const postGenre = (name) => {
    return async () => {
        try {
            const {data} = await axios.post('/genre/create', {name})
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}

export const postPromotion = (email) => {
    return async () => {
        try {
            const {data} = await axios.post('/sendmail', {to: email })
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}

export const CreateUser = async (register, setModal, navigate) => {

    try {
          const {data} = await axios.post("/users/create" , register);
          console.log("si Register");

          data.success === true 

          ? setModal({access : true, body : data})

          : setModal({access : false , body : data});
          localStorage.setItem("token" , JSON.stringify(data.registrationToken))
          localStorage.setItem("user" , JSON.stringify(data.data))
          localStorage.removeItem("registration")

          setTimeout(() => {
            setModal(false);
            navigate("/home");
          }, 1500);
          return;

    } catch (error) {
        console.log(error);
        setModal({access : true , body : error.message});
        setTimeout(() => {
            setModal({access : false });
        }, 1000);
        return error
    }
};

export const getLogin = async (login , setModal , navigate) => {

    try {
        const {data} = await axios.post("/login" , login);
        console.log("si login ");
        data.success 
        ?  (
            setModal({access : true , body : data.data}),
            localStorage.setItem("token" , data.token),
            localStorage.setItem("user" , JSON.stringify(data.data)),
            
            setTimeout(() => {
                            setModal({access : false })
                            navigate("/home")
                        }, 1500)
            
                       
        ) :   
        (setModal({access : true , body : data.msg}));
        setTimeout(() => {
            setModal({access : false })
        }, 1500)
         

    } catch (error) {
        setModal({access : true , body : error.response.data})
        setTimeout(() => {
            setModal({access : false })
        }, 1000);
        return error
    }
} ;


export const handleGoogleLogin = async (setModal, navigate) => {

    try {
       const provider = new GoogleAuthProvider();
       const result = await signInWithPopup(auth , provider);

          console.log(result);
          const userInfo =  result._tokenResponse;
    
          const obj =   {   userName : userInfo.displayName, 
                            profilePic : userInfo.photoUrl,
                            email : userInfo.email,
                            fullName : userInfo.fullName, 
                            password : "AAdsadsad1321321"
                        };
        
            try {
                
                await getLogin(obj , setModal , navigate);

            } catch (error) {

                await CreateUser(obj , setModal,navigate) ;
                
            };
    }
    catch(error) {
      console.log(error);
    };
 
};

export const handleGitHubLogin = async (setModal, navigate) => {
    try {
        const provider = new GithubAuthProvider();
        const result = await signInWithPopup(auth, provider);

        const userInfo =  result._tokenResponse;
        const obj =   {   screenName : userInfo.displayName, 
                            profilePic : userInfo.photoUrl,
                            email : userInfo.email,
                            fullName : userInfo.fullName, 
                            password : "AAdsadsad1321321"
                        };
        console.log(obj);
      /*   try {
            await getLogin(obj , setModal , navigate);
        } catch (error) {
            await CreateUser(obj , setModal,navigate)
        } */
     /*    try {
            await getLogin(obj , setModal , navigate);

        } catch (error) {

            await CreateUser(obj , setModal,navigate) ;
        } */
        
    } catch (error) {
        console.log(error);  

       /*  if(error.code === "auth/account-exists-with-different-credential") {
            setModal({access : true, body : "Ya iniciaste sesion con la misma cuenta, en otro dominio (Google)"})

            setTimeout(() => {
                setModal({access : false})
            }, 1500)
        }       */
    }
};


export const createReviews = (form) => {
    return async () => {
        try {
            const {data} = await axios.post('/review/create', form)
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}
