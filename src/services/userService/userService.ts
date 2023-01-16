import {userServiceTypes} from "./userServiceTypes";
import firebase from "firebase/compat";
import Auth = firebase.auth.Auth;

const userService: userServiceTypes = {
    async signIn(email, password, auth, signInWithEmailAndPassword) {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response;
    },

    async registerUser(email, password, auth, createUserWithEmailAndPassword) {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        return response;
    },

    async logout(auth: Auth){
        auth.signOut();
    }
}

export default userService;