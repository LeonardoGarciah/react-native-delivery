import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

export type signInServiceImplTypes = {
    signIn: ((
        email: string,
        password: string,
    ) => Promise<UserCredential>),

    registerUser: ((
        email: string,
        password: string,
    ) => Promise<UserCredential>)

    logout: (() => void);
}