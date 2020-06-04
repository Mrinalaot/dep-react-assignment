import React, {
  Component,
} from "react";
import Header from "../shared/Header";
import Address from "../address/Address";
import "./Cart.css";
import ShoppingBag from "../shopping_bag/ShoppingBag";
import PaymentInfo from "../payment_info/PaymentInfo";
import axios from 'axios';
import { CART_URL } from "../../constants";

class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cart: {
        id: 0,
        book_id: 0,
        quantity: 0
       }
    }
  }
  

  componentDidMount() {
    axios.get(CART_URL)
    .then(res => {
        const cart = res.data;
        this.setState({ cart });
    })
    .catch((err)=> console.log(err))
}

placeOrder(){
  alert("Your Order is Placed");
}

  render() {
    var book_id = this.state.cart.book_id;
    var quantity = this.state.cart.quantity;

    return (
      <div>
        <Header display="Cart" />
        <div className="container">
          <div className="row">
            <div className="col">
              <Address/>
            </div>
            <div className="col">
              <ShoppingBag book_id={book_id} quantity={quantity}/>
              <PaymentInfo book_id={book_id} quantity={quantity}/>
              <button className="btn btn-success" onClick={()=>{this.placeOrder()}}> Place Order </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
