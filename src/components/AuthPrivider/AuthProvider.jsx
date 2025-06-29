import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("")
    const [photo, setPhoto] = useState()
    const googleProvider = new GoogleAuthProvider()

    const userSignUpWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userSignInWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userSignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const th = localStorage.getItem('theme')
            document.documentElement.setAttribute('data-theme', th);
            setTheme(th)
            
            
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const info = {
        user,
        loading,
        userSignUpWithEmailPass,
        userSignInWithEmailPass,
        userSignInWithGoogle,
        setTheme,
        theme,
        photo,
        setPhoto
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;