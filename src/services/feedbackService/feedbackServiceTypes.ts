import {IToastProps} from "native-base";

export type FeedbackServiceTypes = {
    showToast: ((message: string, toast: IToastProps) => void)
}