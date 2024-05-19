import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loader, setLoder] = useState(true)
const GoogleProvider = new GoogleAuthProvider()

const notify = (toasts) => {
    toast(toasts, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
    });
}

const notify2 = (toasted) => {
    toast.warning(toasted, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
    });
}


useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changes', currentUser);
        setUser(currentUser)
        setLoder(false)
    })
    return () => {
        unSubscribe();
    }
}, [])

const logOut = () => {
    setLoder(true)
    return signOut(auth)
}

const createUser = (email, password) => {
    setLoder(true)
    return createUserWithEmailAndPassword(auth, email, password)

}

const googleLogin = () => {
    setLoder(true)
    return signInWithPopup(auth, GoogleProvider)

}


const signIN = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password)
}




const authInfo={
    user,
    logOut,
    createUser,
    googleLogin,
    signIN,
    notify,
    notify2,
    loader
}
    return (
        <AuthContext.Provider value={authInfo}>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;