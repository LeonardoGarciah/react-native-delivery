import {userServiceTypes} from "../../services/userService/userServiceTypes";
import {signInServiceImplTypes} from "./userServiceImplTypes";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import userService from "../../services/userService/userService";
import {auth} from "../../lib/firebase";

const signInServiceImpl: signInServiceImplTypes = {
    async signIn(email, password) {
        const response = await userService.signIn(email, password, auth, signInWithEmailAndPassword);
        return response;
    },

    async registerUser(email, password) {
        const response = await userService.signIn(email, password, auth, createUserWithEmailAndPassword);
        return response;
    },

    logout() {
        userService.logout(auth);
    }
}

export default signInServiceImpl;