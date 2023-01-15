import feedbackService from "../../services/feedbackService/feedbackService";
import {FeedbackServiceImplTypes} from "./feedbackServiceImplTypes";

const feedbackServiceImpl: FeedbackServiceImplTypes = {
    showToast(message, toast) {
        feedbackService.showToast(message, toast);
    }
}

export default feedbackServiceImpl;