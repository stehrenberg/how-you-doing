import { combineReducers } from 'redux';
import { CHANGE_CATEGORY } from "./actions";

function category(state=0, action) {
    switch(action.type) {
        case CHANGE_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

const reducers = combineReducers({
    category,
});

export default reducers;