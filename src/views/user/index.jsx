import React, { PureComponent } from "react";
import { Button } from "antd";
import "./style.scss";

class User extends PureComponent{
  render(){
    return (
      <div className="user">
        <Button type="warnning">User</Button>
      </div>
    )
  }
}

export default User;