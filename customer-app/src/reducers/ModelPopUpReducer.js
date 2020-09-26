import ActionTypes from '../actions/ModelPopUpActinTypes';

const ModelPopUpReducer = (state = { showDialog: false }, action) => {

    switch (action.type) {

        case ActionTypes.SHOW_DIALOG:
            return { ...state, showDialog: true, customer: { ...action.customer } };
        case ActionTypes.HIDE_DIALOG:
            return { ...state, showDialog: false };
        default:
            return state;
    }

}

export default ModelPopUpReducer;