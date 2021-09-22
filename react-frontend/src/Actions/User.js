import { Types } from "../Constants/Types";

export const ActionCreators = {
    addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),
    updateAvatar: (avatar) => ({ type: Types.UPDATE_AVATAR, payload: { avatar } }),
    formSubmissionStatus: (status) => ({ type: Types.FORM_SUBMISSION_STATUS, payload: { status } }),
    login: (user) => ({ type: Types.LOGIN, payload: { user } }) 
}