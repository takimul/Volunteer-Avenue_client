import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase.config';
import axios from "axios";


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const logInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const logInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const loggedUser = { email: currentUser?.email || user?.email};
            if (currentUser) {
                
                axios.post('https://volunteer-avenue-server.vercel.app/jwt', loggedUser, {withCredentials: true})
                    .then((res) => {
                        console.log('token', res.data);
                    })
            }
            else{
                axios.post('https://volunteer-avenue-server.vercel.app/log-out',loggedUser, {withCredentials: true})
                .then((res) => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [user])


    const userInfo = {
        createUserWithEmail,
        logInWithEmail,
        logInWithFacebook,
        loginWithGoogle,
        logOut,
        updateUserProfile,
        user,
        setLoading,
        loading,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;