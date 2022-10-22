import React, { createContext,useState ,useEffect} from 'react';
import { getAuth,signInWithPopup,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut,updateProfile ,sendEmailVerification } from "firebase/auth";
import app from '../../Firebase/Firebase.config'
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState(null)
    const providerLogin = (provider) =>{
      setloading(true)
        return signInWithPopup(auth,provider)
    }
    const register = (email,password) =>{
      setloading(true)
      return createUserWithEmailAndPassword(auth, email,password)
    }
    const login =(email,password) =>{
      setloading(true)
      return  signInWithEmailAndPassword(auth, email,password)
    }
    const logout = () =>{
      setloading(true)
      return signOut(auth)
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentuser) =>{
        if(currentuser === null || currentuser.emailVerified){
          setuser(currentuser)
        }
        
        setloading(false)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])

    const myprofile = (profile) =>{
      return updateProfile(auth.currentUser,profile)
    }
    
    const emailVerify = () =>{
      return sendEmailVerification(auth.currentUser)
    }


    // value passing
    
    const contextValue = {user,
      providerLogin,
      register,
      login,
      logout,
      loading,
      setloading,
      emailVerify,
      myprofile
    }

    return (
        <AuthContext.Provider value = {contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;