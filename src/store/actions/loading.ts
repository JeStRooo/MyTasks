import {LoadingActionType} from "../../types/loading";

export const startLoading = () => {
  return {
    type: LoadingActionType.START_LOADING
  }
}

export const stopLoading = () => {
  return {
    type: LoadingActionType.STOP_LOADING
  }
}