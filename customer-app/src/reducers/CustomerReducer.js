import ActionTypes from '../actions/CustomerActinTypes';

const customerReducer = (state = {}, action) => {

    switch (action.type) {

        case ActionTypes.GET_CUSTOMERS:
            return state;
        case ActionTypes.SET_CUSTOMERS:
            return [...action.customers];
        case ActionTypes.UPDATE_CUSTOMER:
            return [...state.map((i) => {
                if (i.id === action.customer.id) {
                    return action.customer;
                }
                return i;
            }
            )];

        default:
            return state;
    }

}

export default customerReducer;