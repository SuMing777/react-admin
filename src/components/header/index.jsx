import React, { PureComponent } from "react";
import { Button } from "antd";
import "./style.scss";

class Header extends PureComponent{
  render(){
    return (
      <div className="header">
        <Button type="warnning">我是你爹</Button>
      </div>
    )
  }
}

export default Header;