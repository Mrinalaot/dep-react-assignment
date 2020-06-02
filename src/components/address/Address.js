import React, { Component } from 'react'
import { ADDRESS_URL } from '../../constants';
import axios from 'axios';

class Address extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            address: {},
            formDisable: "disabled"
        }
        this.handleEditAddress = this.handleEditAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get(ADDRESS_URL)
        .then(res => {
            const address = res.data;
            this.setState({ address });
            console.log(this.state.address);
        })
        .catch((err)=> console.log(err))
    }

    handleChange = (event) =>{
        // const {name, value} = event.target;
        
        // this.setState(prevState => {
        //     //console.log(prevState.address, event.target.name);
        //     //console.log(name, value);
        //      ...prevState.address,
        //      prevState[name] : value                           
        //   })
        //   console.log(this.state.address);
          
    }

    handleSubmit = event => {
        alert(this.state.address);
        event.preventDefault();
      }

    handleEditAddress(){
        this.setState({
            formDisable : ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2> Shipping Address </h2>
                    <fieldset disabled={this.state.formDisable}>
                        <div className="form-group">
                            <label htmlFor="addressLine1">Address Line 1</label>
                            <input type="text" value={this.state.address.address_line1} onChange={this.handleChange} className="form-control" name="address_line1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLine2">Address Line 2</label>
                            <input type="text" value={this.state.address.address_line2} onChange={this.handleChange} className="form-control" name="address_line2"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pincode">Pincode</label>
                            <input type="text" value={this.state.address.pincode} onChange={this.handleChange} className="form-control" name="pincode"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="landmark">Landmark</label>
                            <input type="text" value={this.state.address.landmark} onChange={this.handleChange} className="form-control" name="landmark"/>
                        </div>
                    </fieldset>
                    <button type="button"
                        className="btn btn-primary"
                        disabled={!this.state.formDisable}
                        onClick={this.handleEditAddress}
                    >
                            Edit Address
                    </button>
                    <button 
                        type="submit" 
                        className="btn btn-success"
                        disabled={this.state.formDisable}
                    >
                            Save Address
                    </button>
                    
                </form>
            </div>
        )
    }
}

export default Address
