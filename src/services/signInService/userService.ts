import {userServiceTypes} from "./userServiceTypes";

const userService: userServiceTypes = {
    async signIn(email, password, auth, signInWithEmailAndPassword) {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response;
    },

    async registerUser(email, password, auth, createUserWithEmailAndPassword) {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        return response;
    }
}

export default userService;