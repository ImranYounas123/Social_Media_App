import {TYPES} from '../Action/authAction';


const initialstate = {};
const authReducer = (state = initialstate, action) =>{
    switch(action.type){
        case  TYPES.AUTH:
            return action.payload;
        default : 
            return state;
    }
}



export default authReducer;