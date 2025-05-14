import { GoogleAuthProvider,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,signOut,signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import React, { createContext, useContext } from 'react'
import auth from '../Components/Firebase.int'
import { useState, useEffect } from 'react'
import axios from 'axios'




const contextInfo = createContext(null)
export const useAuth =()=>{
return useContext(contextInfo)
}

const AuthContext = ({children}) => {
    const [user, setuser] = useState('')
    const [error,seterror]= useState('')
    const [loading, setloading] = useState(true)

    const createEmailUser = (email,password)=> {
        setloading(true)
        seterror('')
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo =(info)=> {
        setloading(true)
        seterror('')
        return updateProfile(auth.currentUser,info)
    }
    const loginByEmail = (email,password)=> {    
            setloading(true)
            seterror('')
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut = () => {
        setloading(true)
        seterror('')
        return signOut(auth)
    }
    const createGoogleUser = ()=> {
        setloading(true)
        seterror('')
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
      const userStatus = onAuthStateChanged(auth, (currentuser) => {
        if (currentuser) {
           const currentUser  ={ 'email' : currentuser?.email}
          // fetch('https://assigment-backend-xi.vercel.app/jwt',{
          //   method : 'POST',
          //   headers : {
          //     'Content-Type' : 'application/json'
          //     },
          //     body : JSON.stringify(currentUser)
          // })
          // .then(res => res.json())
          // .then(data => {
          //   console.log(data)
          // })
          axios.post('https://assigment-backend-xi.vercel.app/jwt',currentUser,{withCredentials:true})
          .then(res => console.log(res.data))
        setuser(currentuser)
        setloading(false)
          // ...
        } else {
          setuser(null)
          setloading(false)
        }
    })
    
      return () => {
        
      }
    }, [])
    



    const authValue = {
        user,
        setuser,
        loading,
        setloading,
        createEmailUser,
        updateUserInfo,
        loginByEmail,
        userLogOut,
        createGoogleUser,
        error,
        seterror
    }
   
  return (
    <contextInfo.Provider value={authValue}>
      {children}
    </contextInfo.Provider>
  )
}

export default AuthContext
