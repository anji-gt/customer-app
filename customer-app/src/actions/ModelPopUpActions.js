
import ActionTypes from './ModelPopUpActinTypes';


export const openPopupBox = (customer) => {

  return {
    type: ActionTypes.SHOW_DIALOG,
    customer
  }
};

export const closePopupBox = () => {
  return {
    type: ActionTypes.HIDE_DIALOG
  }
};