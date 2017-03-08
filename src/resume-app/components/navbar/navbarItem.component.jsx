import React, { Component } from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

class NavbarItem extends Component {
  render () {
    const { router, index, to, children, ...rest } = this.props;
    const className = this.props.className || ' ';

    let isActive;
    if( router.isActive('/', true) && index ) isActive = true;
    else isActive = router.isActive(to);
    const LinkComponent = index ? IndexLink : Link;
    const liClassName = isActive ? `${className} navbar-active` : `${className}`;

    return (
      <li className={liClassName}>
        <LinkComponent to={to} className="nav-link">{children}</LinkComponent>
      </li>
    )
  }
}

NavbarItem = withRouter(NavbarItem);

export default NavbarItem;
