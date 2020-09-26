
import ActionTypes from './CustomerActinTypes';
import CustomersData from '../resources/Customers.json'


export const fetchCustomers = () => {

  /*fetch('.././resources/Customers.json')
    .then(res => {
     
         res.json()})
    .then((data) => {
   
      console.log("from Actions")
      console.log(data)
    })
    .catch(console.log)

*/
  //Place for call real API, for now returning mock resposne from Json file
  return {
    type: ActionTypes.SET_CUSTOMERS,
    customers: CustomersData
  }
};

export const getCustomers = () => {
  return {
    type: ActionTypes.GET_CUSTOMERS,
  }
};

export const editCustomer = (customer) => {
  return {
    type: ActionTypes.EDIT_CUSTOMER,
    customer: customer
  }
};

export const updateCustomer = (customer) => {
  return {
    type: ActionTypes.UPDATE_CUSTOMER,
    customer: customer
  }
};