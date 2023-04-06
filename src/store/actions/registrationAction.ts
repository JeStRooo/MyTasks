import {RegistrationActionType, RegistrationType} from "../../types/registrationType";

export const registrationAction = (payload: RegistrationType) => {
  return {
    type: RegistrationActionType.CREATE_USER_SUCCESS,
    payload
  }
}