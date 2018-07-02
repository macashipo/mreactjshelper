import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, ButtonGroup, Col, Row } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Collapse } from 'reactstrap';

import classnames from 'classnames';
import * as H from '../../../helpers';
import Api from '../../../services/MWorkflow/Api';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Button onClick={()=>{
          Api.add();
        }}>Add</Button>
        <Button onClick={()=>{
          Api.getAll();
        }}>Get All</Button>
        <Button onClick={()=>{
          Api.add({pID:'14Frp6xnkXaFBWYMmxDS'});
        }}>Add with pID</Button>
      </div>
    );
  }
}

export default Page;
