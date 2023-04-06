import {RegistrationAction, RegistrationActionType} from "../../types/registrationType";


const initialState = {
  name: null,
  email: null,
  password: null
}

export const registration = (state = initialState, action: RegistrationAction) => {
  switch (action.type) {
    case RegistrationActionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state
  }
}