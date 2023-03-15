import AppConstants from "../../../components/LoginModule/AppConstants";

const initialState ={
    createOnLoad: false,
    createUser: null,
    saveUserInfo: null,

}

function LoginReducerState(state:any = initialState, action: any){
    switch(action.type){
        case AppConstants.CREATE_OR_EDIT_USER_LOAD:
            console.log("load reducer");
            
            return{
                ...state,
                createOnLoad: true
            }
        case AppConstants.CREATE_OR_EDIT_USER_SUCCESS:
            console.log("success reducer");
            
            return{
                ...state,
                createOnLoad: false,
                saveUserInfo: action.result
            }
        case AppConstants.GET_USER_LOAD:
            return{
                ...state,
                getUserLoad: true
            }
        case AppConstants.GET_USER_SUCCESS:
            return{
                ...state,
                getUserload: false,
                getUser: action.result
            }
            default:
                return {
                    ...state
                }
    }
}

export default LoginReducerState;
