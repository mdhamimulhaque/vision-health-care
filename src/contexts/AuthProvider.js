import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    // ---> create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // ---> loginUser
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // ---> update user
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
    }


    // ---> track current user || isLogin
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])


    // ---> logout
    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;