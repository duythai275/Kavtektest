import {
    GET_ALL_USERS
} from "../actions/user/type";

const initState = {
    users: []
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function ( state = initState, action ) {
    switch ( action.type ) {
        case GET_ALL_USERS: {
            return {
                users: action.payload.map( user => {
                    const d = new Date(user.createdAt);
                    return {
                    ...user,
                    createdAt: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
                    } 
                })
            };
        }
        default: 
            return state
    }
}