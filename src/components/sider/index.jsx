import React, { PureComponent } from "react";
import { Menu } from 'antd';
import MenuConfig from './../../api/path-menu.js';
import { NavLink } from 'react-router-dom';
import "./style.scss";
const { SubMenu } = Menu;

class NavSider extends PureComponent{

  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode: menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
    return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div className="nav-sider">
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
      
    );
  }
}

export default NavSider;