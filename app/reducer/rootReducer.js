import {combineReducers} from 'redux';
import cos from './reducer';

/*
    Hier werden alle Reducer bekanntgegeben.
 */
const appReducer = combineReducers({
    cos
});

/*
    Wenn der action.Type Reset Store heisst,
    wird der State komplett gelöscht.
    Anwendungsfall: In der McdApp logged der User sich aus.
    Somit müssen alle gehaltenen Daten gelöscht werden.
 */
const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        state = undefined
    }
    return appReducer(state, action)
};

export default rootReducer