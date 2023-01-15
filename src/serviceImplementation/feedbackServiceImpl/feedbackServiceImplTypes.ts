import {IToastProps} from "native-base";

export type FeedbackServiceImplTypes = {
    showToast: ((message: string, toast: IToastProps) => void)
}