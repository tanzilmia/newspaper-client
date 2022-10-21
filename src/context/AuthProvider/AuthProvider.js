import React, { createContext,useState ,useEffect} from 'react';
import { getAuth,signInWithPopup,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config'
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null)

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const register = (email,password) =>{
      return createUserWithEmailAndPassword(auth, email,password)
    }

    const login =(email,password) =>{
      return  signInWithEmailAndPassword(auth, email,password)
    }

    const logout = () =>{
      return signOut(auth)
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentuser) =>{
        setuser(currentuser)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    


    // value passing
    
    const contextValue = {user,providerLogin,register,login,logout}

    return (
        <AuthContext.Provider value = {contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;