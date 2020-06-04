import React, { Component } from 'react'
import axios from 'axios';
import { BOOK_URL } from '../../constants';
import "./PaymentInfo.css";

class PaymentInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
             book: {}
        }
    }
    getBookDetails(book_id){
        axios.get(`${BOOK_URL}/${book_id}`)
        .then(res => {
            const book = res.data;
            if(this.state.book.id !== book_id) {
                this.setState({ book });
            }
        })
        .catch((err)=> console.log(err))
    }
    componentDidUpdate(){
        this.getBookDetails(this.props.book_id);
    }
    
    
    render() {
        var price = this.state.book.price * this.props.quantity;
        var tax = (this.state.book.price * this.props.quantity)*.07;
        const shipping_charge = 50;
        return (
            <div>
                <h4> Payment Info :</h4>
                <div className="row"> 
                    <div className="col"> Price </div>  
                    <div className="col">  ${ price } </div>
                </div>

                <div className="row">
                    <div className="col"> Tax </div>
                    <div className="col"> ${tax} </div>
                </div>
                <div className="row"> 
                    <div className="col"> Shipping Charge </div>
                    <div className="col"> ${shipping_charge} </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col"> Total </div>
                    <div className="col"> {price + tax + shipping_charge}</div>
                </div>
            </div>
        )
    }
}

export default PaymentInfo
