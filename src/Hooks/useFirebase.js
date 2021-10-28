import initializeAuthentication from '../Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react'
initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // user data store
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    // google Login btn
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)


    }

    // signOut btn
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch(error => {
                setError(error.message)
            })
    }

    // observer for the user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, [])


    return {
        user, error, handleGoogleSignIn, handleSignOut
    }
}

export default useFirebase;