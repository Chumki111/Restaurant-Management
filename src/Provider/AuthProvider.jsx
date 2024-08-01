import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createContext } from "react"
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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
    // log out
    const logOut=() =>{
        setLoading(true)
        return signOut(auth)
    }
    // onAuthStateChange
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,createUser =>{
            setUser(createUser);
            console.log('CurrentUser-------',createUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
// propTypes
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider