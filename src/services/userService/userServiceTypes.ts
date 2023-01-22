import firebase from 'firebase/compat';
import Auth = firebase.auth.Auth;
import UserCredential = firebase.auth.UserCredential;

export type userServiceTypes = {
    signIn: ((
        email: string,
        password: string,
        auth: Auth,
        signInWithEmailAndPassword: ((auth: Auth, email: string, password: string) => Promise<UserCredential>),
    ) => Promise<UserCredential>),

    registerUser: ((
        email: string,
        password: string,
        auth: Auth,
        createUserWithEmailAndPassword: ((auth: Auth, email: string, password: string) => Promise<UserCredential>),
    ) => Promise<UserCredential>),

    logout: ((auth: Auth) => void);

}