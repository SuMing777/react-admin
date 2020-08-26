import React, { PureComponent } from "react";
import { Button } from "antd";
import "./style.scss";

class Home extends PureComponent{
  render(){
    return (
      <div className="home">
        <Button type="warnning">Home</Button>
      </div>
    )
  }
}

export default Home;