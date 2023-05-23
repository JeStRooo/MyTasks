import {LoadingAction, LoadingActionType} from "../../types/loading";

const initialState = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, action: LoadingAction) => {
  switch (action.type) {
    case LoadingActionType.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LoadingActionType.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};