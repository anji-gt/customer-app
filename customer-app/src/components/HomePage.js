import React, { Component } from 'react';


export default class HomePage extends Component {


    handleNavButtonClick() {
        this.props.history.push('/customers')
        console.log(this.props.history);
    }

    render() {
        return (
            <div>
                <h2 className="m-2 p-4 text-white" >{'Amdocs Catalog ONE'}</h2>
                <h6 className="text-white p-4">{'MEETING YOUR CRUCIAL BUSINESS NEEDS WITH AN OPEN AND DYNAMIC PORTFOLIO'}</h6>
                <button type="button" className="btn btn-primary bg-linear" onClick={() => { this.handleNavButtonClick() }}>Get Customers</button>
            </div>
        )
    }

}
