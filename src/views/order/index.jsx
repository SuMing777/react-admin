import React, { PureComponent } from "react";
import { Button } from "antd";
import "./style.scss";

class Order extends PureComponent{
  render(){
    return (
      <div className="order">
        <Button type="warnning">Order</Button>
      </div>
    )
  }
}

export default Order;