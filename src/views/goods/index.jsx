import React, { PureComponent } from "react";
import { Button } from "antd";
import "./style.scss";

class Goods extends PureComponent{
  render(){
    return (
      <div className="goods">
        <Button type="warnning">Goods</Button>
      </div>
    )
  }
}

export default Goods;