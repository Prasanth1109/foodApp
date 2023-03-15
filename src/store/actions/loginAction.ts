import AppConstants from "../../components/LoginModule/AppConstants";

const createOrEditUserAction = (payload: any) => {
    let action = {
        type: AppConstants.CREATE_OR_EDIT_USER_LOAD,
        payload
    }
    return action
}
function getUserAction(payload: any) {
    const action = {
        type: AppConstants.GET_USER_LOAD,
        payload
    }
    return action;
}

export {createOrEditUserAction, getUserAction}