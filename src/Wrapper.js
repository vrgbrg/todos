
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Wrapper extends React.Component {
  render () {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'><h1>Todos</h1></NavbarBrand>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
