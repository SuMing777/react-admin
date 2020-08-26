import React, { PureComponent } from "react";
import { Row, Col } from "antd";
import Sider from "./../components/sider/index.jsx";
import Header from "./../components/header/index.jsx";
import Footer from "./../components/footer/index.jsx";

class Layout extends PureComponent{
  render(){
    return (
      <Row className="container">
        <Col span="4" className="sider">
          <Sider></Sider>
        </Col>
        <Col span="20" className="main">
          <Header></Header>
          <Row className="content">
            {this.props.children}
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}

export default Layout;