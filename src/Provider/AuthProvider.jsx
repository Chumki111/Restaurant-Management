import { useState } from "react"
import { createContext } from "react"
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const signIn=(email,password) =>{
     setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
    }
    // update profile
    const updateUserProfile=(name,photo) =>{
     return updateProfile(auth.createUser,{
        displayName:name,
        photoURL:photo
     })
    }
    // sign in with google
    const signInWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider