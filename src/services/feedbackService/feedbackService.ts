import {FeedbackServiceTypes} from "./feedbackServiceTypes";

const feedbackService: FeedbackServiceTypes = {
    showToast(message, toast){
        toast.show({
            title: message,
            placement: "top"
        })
    }
}

export default feedbackService;