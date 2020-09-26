import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CustomerActions from '../actions/CustomerActions';
import * as ModelPopUpActions from '../actions/ModelPopUpActions'

class Customers extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
        console.log("fetch customers",this.props)
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-around row">
                    {
                        this.props.customers && this.props.customers.map((cust) => {
                            console.log(this.props.customers);

                            return (
                                <div className="m-2" key={cust.id} onDoubleClick={() => { this.props.editCustomer(cust) }}>
                                    <div className="card inliner-width">
                                        <h5 className="card-header  bg-light-header"> {cust.name}</h5>
                                        <div className="card-text  text-white  bg-blue">
                                            <p>{cust.email}</p>
                                            <p>{cust.address && cust.address.city}</p>
                                            <p>{cust.phone}</p>
                                            <p>{cust.website}</p>
                                            <p>{cust.company && cust.company.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        customers: [...state.customers]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomers: () => dispatch(CustomerActions.fetchCustomers()),
        editCustomer: (cust) => dispatch(ModelPopUpActions.openPopupBox(cust))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
