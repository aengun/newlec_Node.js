// const userPrincipal = {
//     userName:null
// };

// function Authentication(state=userPrincipal, action){
function AuthReducer(state = { userName: null }, action) {
    switch (action.type) {
        case 1: // 로그인 상태
            return { ...state, userName: action.userName };
        case 2: // 로그아웃 상태
            return { ...state, userName: null };
        default:
            return state;
    }
}

export default AuthReducer;