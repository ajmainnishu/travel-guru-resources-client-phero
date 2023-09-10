import { createContext } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then()
            .catch()
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const passwordReset = (email) => {
        sendPasswordResetEmail(auth, email);
    }
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        createUser,
        logIn,
        passwordReset,
        googleSignIn,
        userName,
        facebookSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;