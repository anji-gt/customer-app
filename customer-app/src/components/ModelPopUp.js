import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import * as ModelPopUpActions from '../actions/ModelPopUpActions'
import * as CustomerActions from '../actions/CustomerActions';


class ModelPopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            customer: nextProps.customer
        })
    }

    handleChange(e) {

        let key = e.target.name;
        let value = e.target.value;
        if (key === "cname") {
            var company = {
                ...this.state.customer.company
            }
            company.name = value;
            this.setState(prevState => ({
                customer: {
                    ...prevState.customer,
                    company
                }
            }))
        } else if (key === "city") {
            let address = {
                ...this.state.customer.address
            }
            address.city = value;
            this.setState(prevState => ({
                customer: {
                    ...prevState.customer,
                    address
                }
            }))

        } else {
            this.setState(prevState => ({
                customer: {
                    ...prevState.customer,
                    [key]: value
                }
            }))
        }

    }
    render() {
        const showHideClassName = this.props.showDialog ? 'modal display-block' : 'modal display-none';

        if (this.state && this.state.customer) {
            const {
                name,
                email,
                address: {
                    city
                } = {},
                phone,
                website,
                company: {
                    name: companyName
                }
            } = this.state.customer;
            return ( <div className = {
                    showHideClassName
                } >
                <section className = 'modal-main  col-xs-9 col-sm-6 col-md-4 p-4 border border-dark'>
                <form>
                <h5 > Edit Customer Datails </h5> 
                <hr/> 
                <label className = "row text-left">
                <span className = "col-sm-3" > Name: </span> 
                <input className = "mb-2 col-sm-8"
                type = "name"
                name = "name"
                onChange = {
                    this.handleChange.bind(this)
                }
                value = {
                    name
                }
                /> 
                </label >

                <label className="row text-left">
                <span className = "col-sm-3" > Email: </span>
                 <input type = "text"
                className = "mb-2 col-sm-8"
                name = "email"
                onChange = {
                    this.handleChange.bind(this)
                }
                value = {
                    email
                }
                /> 
                </label >

                <label className = "row text-left" >
                <span className = "col-sm-3" > City: </span> 
                <input type = "text"
                className = "mb-2 col-sm-8"
                name = "city"
                onChange = {
                    this.handleChange.bind(this)
                }
                value = {
                    city
                }
                /> 
                </label >

                <label className = "row text-left" >
                <span className = "col-sm-3" > Phone: </span> 
                <input type = "text"
                className = "mb-2 col-sm-8"
                name = "phone"
                onChange = {
                    this.handleChange.bind(this)
                }
                value = {
                    phone
                }
                /> </label >

                <label className = "row text-left" >
                <span className = "col-sm-3" > Website: </span> 
                <input type = "text"
                className = "mb-2 col-sm-8"
                name = "website"
                onChange = {
                    this.handleChange.bind(this)
                }
                value = {
                    website
                }
                /> 
                </label >

                <label className = "row text-left" >
                <span className = "col-sm-3" > Company: </span> 
                <input type = "text"
                name = "cname"
                className = "col-sm-8"
                onChange = {
                    this.handleChange.bind(this)
                }
                value = {
                    companyName
                }
                /> 
                </label >

                </form>
                 <button className = "btn btn-primary bg-linear m-2"
                onClick = {
                    () => {
                        this.props.updateCustomer(this.state.customer);
                        this.props.closePopUp();
                    }
                } > Update </button>
                 <button className = "btn btn-primary bg-linear m-2"
                onClick = {
                    () => {
                        this.props.closePopUp()
                    }
                } >
                Close </button>
                 </section > 
                 </div>
            )
        } else {
            return ""
        }
    }
}

const mapStateToProps = (state) => {
    return {
        showDialog: state.modelPopUpReducer.showDialog,
        customer: state.modelPopUpReducer.customer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCustomer: (custmer) => dispatch(CustomerActions.updateCustomer(custmer)),
        closePopUp: () => dispatch(ModelPopUpActions.closePopupBox())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelPopUp);