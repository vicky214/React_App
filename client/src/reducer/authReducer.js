import { LOGIN, LOGOUT, SET_USER_TYPE } from '../action/authaction'

const initialState = {
    isAuthenticated: false,
    userType: null,
    department: null,
    status: null,
    name: null,
    email:null,
    organization:null,

}

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                userType:action.payload.roles,
                department:action.payload.department,
                status:action.payload.status,
                name:action.payload.name,
                email:action.payload.email,
                organization:action.payload.organization,
            };
        case LOGOUT:
            console.log('afterfddddddddddddddddddddddd')
            return {
                ...state,
                isAuthenticated: false,
                userType: null,
                department: null,
                status: null,
                name: null,
                email:null,
                organization:null
            };
        default:
            return state;
    }
};

export default reducer;