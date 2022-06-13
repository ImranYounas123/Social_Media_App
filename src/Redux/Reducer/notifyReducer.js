import {TYPES} from '../Action/notifyAction';


const initialstate = {};
const notifyReducer = (state = initialstate, action) =>{
    switch(action.type){
        case  TYPES.NOTIFY:
            return action.payload;
        default : 
            return state;
    }
}



export default notifyReducer;