import {userServiceTypes} from "../../services/signInService/userServiceTypes";
import {signInServiceImplTypes} from "./userServiceImplTypes";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import userService from "../../services/signInService/userService";
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
}

export default signInServiceImpl;