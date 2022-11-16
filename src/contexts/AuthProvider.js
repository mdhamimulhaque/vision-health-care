import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // ---> create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // ---> loginUser
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---> google login
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }


    // ---> update user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }


    // ---> track current user || isLogin
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])


    // ---> logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    const authInfo = {
        createUser,
        loginUser,
        user,
        loading,
        logOut,
        updateUser,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;