import React, {
  Component,
} from "react";
import Header from "../shared/Header";
import axios from "axios";
import { ORDER_URL } from "../../constants";
import SingleOrder from "./SingleOrder";

export class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderlist: [],
    };
  }

  componentDidMount() {
    axios
      .get(ORDER_URL)
      .then((res) => {
        const orderlist = res.data;
        this.setState({ orderlist });
        console.log(
          this.state.orderlist
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header display="Orders" />
          <div className="container">
            {this.state.orderlist.map(
              (order, index) => 
                <SingleOrder key={index} items={order.items} status={order.status} orderDate={order.order_date}></SingleOrder>
            )}
          </div>
      </div>
    );
  }
}


export default Orders;
