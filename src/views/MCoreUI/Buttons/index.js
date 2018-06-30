import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, ButtonGroup, Col, Row } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Popover, PopoverBody, PopoverHeader} from 'reactstrap';
import { Progress } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import { Tooltip, UncontrolledTooltip} from 'reactstrap';
import { Nav, NavItem, NavLink} from 'reactstrap';
import { TabContent, TabPane} from 'reactstrap';
import { Badge } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classnames from 'classnames';

import LaddaButton, { EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  CONTRACT,
  CONTRACT_OVERLAY,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT } from 'react-ladda';

import 'ladda/dist/ladda-themeless.min.css';

import 'spinkit/css/spinkit.css';

import CardWithCode from '../Components/CardWithCode';


class PageCollapse extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {
      collapse: false,
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle=()=>{
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <CardWithCode header="Collapse">
        <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
          <CardBody>
            <p>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </p>
            <p>
              Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean
              elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras
              ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus.
              Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis
              sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis
              purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non
              augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget
              faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu,
              vehicula sagittis elit leo id nisi.
            </p>
          </CardBody>
        </Collapse>
        <CardFooter>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <h5>Current state: {this.state.status}</h5>
        </CardFooter>
      </CardWithCode>
    )
  }
}

class PageDropdown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <CardWithCode header="Dropdown">
        <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
          this.toggle(0);
        }}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={this.state.dropdownOpen[5]} toggle={() => {this.toggle(5);}}>
          <DropdownToggle
            tag="span"
            onClick={() => {this.toggle(5);}}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen[5]}
          >
            Custom Dropdown Content <strong> * </strong>
          </DropdownToggle>
          <DropdownMenu>
            <div className="dropdown-item" onClick={() => {this.toggle(5);}}>Custom dropdown item 1</div>
            <div className="dropdown-item" onClick={() => {this.toggle(5);}}>Custom dropdown item 2</div>
            <div className="dropdown-item-text" onClick={() => {this.toggle(5);}}>Custom dropdown text 3</div>
            <hr className="my-0 dropdown-item-text" />
            <div onClick={() => {this.toggle(5);}}>Custom dropdown item 4</div>
          </DropdownMenu>
        </Dropdown>
      </CardWithCode>
    )
  }
}

class PagePagination extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <CardWithCode header="Dropdown">
        <Pagination>
          <PaginationItem>
            <PaginationLink previous tag="button" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink tag="button">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next tag="button" />
          </PaginationItem>
        </Pagination>
      </CardWithCode>
    )
  }
}

class PagePopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    var popovers = [
      {
        placement: 'top',
        text: 'Top',
      },
      {
        placement: 'bottom',
        text: 'Bottom',
      },
      {
        placement: 'left',
        text: 'Left',
      },
      {
        placement: 'right',
        text: 'Right',
      },
    ];
    let _text = popovers[0].text;
    let _placement = popovers[0].placement;
    return (
      <CardWithCode header="Popover">
        <span>
          <Button className="mr-1" color="secondary" id={'Popover-1'} onClick={this.toggle}>
            {_text}
          </Button>
          <Popover placement={_placement} isOpen={this.state.popoverOpen} target={'Popover-1'} toggle={this.toggle}>
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
          </Popover>
        </span>
      </CardWithCode>
    )
  }
}

class PageProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWithCode header="ProgressBar">
        <div className="text-center">25%</div>
        <Progress value="25" />
        <div className="text-center">Multi</div>
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
        <div className="text-center">With Text</div>
        <Progress value="25" className="mb-3">25%</Progress>
        <div className="text-center">Striped</div>
        <Progress striped color="info" value={50} className="mb-3" />
        <div className="text-center">Animated</div>
        <Progress animated color="danger" value="100" className="mb-3" />
        <div className="text-center">1 of 5</div>
        <Progress value="1" max="5" />
      </CardWithCode>
    )
  }
}

class PageSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWithCode header="Switch">
        <AppSwitch className={'mx-1'} color={'primary'} checked />
        <AppSwitch className={'mx-1'} color={'secondary'} />
        <AppSwitch className={'mx-1'} variant={'pill'} color={'success'} checked />
        <AppSwitch className={'mx-1'} variant={'3d'} color={'warning'} defaultChecked />
        <AppSwitch className={'mx-1'} variant={'3d'} color={'dark'} checked disabled />
        <AppSwitch className={'mx-1'} variant={'3d'} color={'danger'} checked outline={'alt'} />
        <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
        <AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'secondary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
        <AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label />
        <AppSwitch className={'mx-1'} color={'warning'} outline checked />
        <AppSwitch className={'mx-1'} color={'success'} label checked />
      </CardWithCode>
    )
  }
}

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

class PageTooltip extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: [false, false],
      tooltips: [
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'right',
          text: 'Right',
        },
      ],
    };
  }
  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      tooltipOpen: newArray,
    });
  }

  render() {
    return (
      <CardWithCode header="Tooltip">
        {this.state.tooltips.map((tooltip, i) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </CardWithCode>
    )
  }
}

class PageTab extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <CardWithCode header="Dropdown">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Messages
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="2">
            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tabId="3">
            2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </TabPane>
        </TabContent>
      </CardWithCode>
    )
  }
}

class PageTextEditor extends Component {
  constructor(props) {
    super(props)

    this.initialText = `<p><b>Bootstrap</b> is a <a href="/wiki/Free_and_open-source_software" title="Free and open-source software">free and open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web framework</a> for designing <a href="/wiki/Website" title="Website">websites</a> and <a href="/wiki/Web_application" title="Web application">web applications</a>. It contains <a href="/wiki/HTML" title="HTML">HTML</a>- and <a href="/wiki/CSS" class="mw-redirect" title="CSS">CSS</a>-based design templates for <a href="/wiki/Typography" title="Typography">typography</a>, forms, buttons, navigation and other interface components, as well as optional <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> extensions. Unlike many web frameworks, it concerns itself with <a href="/wiki/Front-end_web_development" title="Front-end web development">front-end development</a> only.</p>
                      <p>Bootstrap is the second most-starred project on <a href="/wiki/GitHub" title="GitHub">GitHub</a>, with more than 111,600 stars and 51,500 forks.<sup id="cite_ref-most-starred_3-0" class="reference"><a href="#cite_note-most-starred-3">[3]</a></sup></p>
                      <p>Bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at <a href="/wiki/Twitter" title="Twitter">Twitter</a> as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies and a high maintenance burden. According to <a href="/wiki/Twitter" title="Twitter">Twitter</a> developer Mark Otto:</p>
                      <blockquote class="templatequote">
                      <p>"A super small group of developers and I got together to design and build a new internal tool and saw an opportunity to do something more. Through that process, we saw ourselves build something much more substantial than another internal tool. Months later, we ended up with an early version of Bootstrap as a way to document and share common design patterns and assets within the company."<sup id="cite_ref-bootstrap_a_list_apart_4-0" class="reference"><a href="#cite_note-bootstrap_a_list_apart-4">[4]</a></sup></p>
                      </blockquote>
                      <p>After a few months of development by a small group, many developers at Twitter began to contribute to the project as a part of Hack Week, a <a href="/wiki/Hackathon" title="Hackathon">hackathon</a>-style week for the Twitter development team. It was renamed from Twitter Blueprint to Bootstrap, and released as an open source project on August 19, 2011.<sup id="cite_ref-v1-release_5-0" class="reference"><a href="#cite_note-v1-release-5">[5]</a></sup> It has continued to be maintained by Mark Otto, Jacob Thornton, and a small group of core developers, as well as a large community of contributors.<sup id="cite_ref-about_6-0" class="reference"><a href="#cite_note-about-6">[6]</a></sup></p>`


    this.state = { text: this.initialText } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
      ]
    }

    
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <CardWithCode header="TextEditor">
        <ReactQuill value={this.state.text} modules={this.modules} />
      </CardWithCode>
    )
  }
}

class PageForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWithCode header="Form">
        
      </CardWithCode>
    )
  }
}

class PageAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <CardWithCode header="Alert">
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Alert color="secondary">
          This is a secondary alert — check it out!
        </Alert>
        <Alert color="success">
          This is a success alert — check it out!
        </Alert>
        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
      </CardWithCode>
    )
  }
}

class PageToast extends Component {
  constructor(props) {
    super(props);
    this.notify = this.notify.bind(this);
  }
  notify() {
    // default type
    return toast('Hello World!');
  }

  render() {
    const containerStyle = {
      zIndex: 1999
    };

    return (
      <CardWithCode header="Toast">
        <ToastContainer position="top-right" autoClose={5000} style={containerStyle}/>
        <Button color="secondary" className="mr-1" onClick={this.notify}>Notify</Button>
      </CardWithCode>
    )
  }
}

class PageBadge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWithCode header="Alert">
        <h1>Heading <Badge color="secondary">New</Badge></h1>
        <Badge className="mr-1" color="success">Success</Badge>
        <Badge className="mr-1" color="info" pill>Info</Badge>
        <Badge className="mr-1" href="#" color="warning">Warning</Badge>
      </CardWithCode>
    )
  }
}

class PageIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWithCode header="Icons">
        <Row className="text-center">
          <Col xs="6" sm="4" md="3">
            <i className="icon-user icons font-2xl d-block mt-4"></i>icon-user
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-people icons font-2xl d-block mt-4"></i>icon-people
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-user-female icons font-2xl d-block mt-4"></i>icon-user-female
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-user-follow icons font-2xl d-block mt-4"></i>icon-user-follow
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-user-following icons font-2xl d-block mt-4"></i>icon-user-following
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-user-unfollow icons font-2xl d-block mt-4"></i>icon-user-unfollow
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-login icons font-2xl d-block mt-4"></i>icon-login
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-logout icons font-2xl d-block mt-4"></i>icon-logout
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-emotsmile icons font-2xl d-block mt-4"></i>icon-emotsmile
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-phone icons font-2xl d-block mt-4"></i>icon-phone
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-call-end icons font-2xl d-block mt-4"></i>icon-call-end
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-call-in icons font-2xl d-block mt-4"></i>icon-call-in
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-call-out icons font-2xl d-block mt-4"></i>icon-call-out
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-map icons font-2xl d-block mt-4"></i>icon-map
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-location-pin icons font-2xl d-block mt-4"></i>icon-location-pin
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-direction icons font-2xl d-block mt-4"></i>icon-direction
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-directions icons font-2xl d-block mt-4"></i>icon-directions
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-compass icons font-2xl d-block mt-4"></i>icon-compass
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-layers icons font-2xl d-block mt-4"></i>icon-layers
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-menu icons font-2xl d-block mt-4"></i>icon-menu
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-list icons font-2xl d-block mt-4"></i>icon-list
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-options-vertical icons font-2xl d-block mt-4"></i>icon-options-vertical
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-options icons font-2xl d-block mt-4"></i>icon-options
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-down icons font-2xl d-block mt-4"></i>icon-arrow-down
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-left icons font-2xl d-block mt-4"></i>icon-arrow-left
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-right icons font-2xl d-block mt-4"></i>icon-arrow-right
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-up icons font-2xl d-block mt-4"></i>icon-arrow-up
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-up-circle icons font-2xl d-block mt-4"></i>icon-arrow-up-circle
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-left-circle icons font-2xl d-block mt-4"></i>icon-arrow-left-circle
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-right-circle icons font-2xl d-block mt-4"></i>icon-arrow-right-circle
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-arrow-down-circle icons font-2xl d-block mt-4"></i>icon-arrow-down-circle
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-check icons font-2xl d-block mt-4"></i>icon-check
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-clock icons font-2xl d-block mt-4"></i>icon-clock
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-plus icons font-2xl d-block mt-4"></i>icon-plus
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-close icons font-2xl d-block mt-4"></i>icon-close
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-trophy icons font-2xl d-block mt-4"></i>icon-trophy
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-screen-smartphone icons font-2xl d-block mt-4"></i>icon-screen-smartphone
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-screen-desktop icons font-2xl d-block mt-4"></i>icon-screen-desktop
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-plane icons font-2xl d-block mt-4"></i>icon-plane
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-notebook icons font-2xl d-block mt-4"></i>icon-notebook
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-mustache icons font-2xl d-block mt-4"></i>icon-mustache
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-mouse icons font-2xl d-block mt-4"></i>icon-mouse
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-magnet icons font-2xl d-block mt-4"></i>icon-magnet
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-energy icons font-2xl d-block mt-4"></i>icon-energy
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-disc icons font-2xl d-block mt-4"></i>icon-disc
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-cursor icons font-2xl d-block mt-4"></i>icon-cursor
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-cursor-move icons font-2xl d-block mt-4"></i>icon-cursor-move
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-crop icons font-2xl d-block mt-4"></i>icon-crop
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-chemistry icons font-2xl d-block mt-4"></i>icon-chemistry
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-speedometer icons font-2xl d-block mt-4"></i>icon-speedometer
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-shield icons font-2xl d-block mt-4"></i>icon-shield
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-screen-tablet icons font-2xl d-block mt-4"></i>icon-screen-tablet
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-magic-wand icons font-2xl d-block mt-4"></i>icon-magic-wand
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-hourglass icons font-2xl d-block mt-4"></i>icon-hourglass
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-graduation icons font-2xl d-block mt-4"></i>icon-graduation
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-ghost icons font-2xl d-block mt-4"></i>icon-ghost
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-game-controller icons font-2xl d-block mt-4"></i>icon-game-controller
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-fire icons font-2xl d-block mt-4"></i>icon-fire
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-eyeglass icons font-2xl d-block mt-4"></i>icon-eyeglass
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-envelope-open icons font-2xl d-block mt-4"></i>icon-envelope-open
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-envelope-letter icons font-2xl d-block mt-4"></i>icon-envelope-letter
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-bell icons font-2xl d-block mt-4"></i>icon-bell
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-badge icons font-2xl d-block mt-4"></i>icon-badge
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-anchor icons font-2xl d-block mt-4"></i>icon-anchor
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-wallet icons font-2xl d-block mt-4"></i>icon-wallet
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-vector icons font-2xl d-block mt-4"></i>icon-vector
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-speech icons font-2xl d-block mt-4"></i>icon-speech
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-puzzle icons font-2xl d-block mt-4"></i>icon-puzzle
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-printer icons font-2xl d-block mt-4"></i>icon-printer
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-present icons font-2xl d-block mt-4"></i>icon-present
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-playlist icons font-2xl d-block mt-4"></i>icon-playlist
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-pin icons font-2xl d-block mt-4"></i>icon-pin
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-picture icons font-2xl d-block mt-4"></i>icon-picture
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-handbag icons font-2xl d-block mt-4"></i>icon-handbag
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-globe-alt icons font-2xl d-block mt-4"></i>icon-globe-alt
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-globe icons font-2xl d-block mt-4"></i>icon-globe
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-folder-alt icons font-2xl d-block mt-4"></i>icon-folder-alt
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-folder icons font-2xl d-block mt-4"></i>icon-folder
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-film icons font-2xl d-block mt-4"></i>icon-film
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-feed icons font-2xl d-block mt-4"></i>icon-feed
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-drop icons font-2xl d-block mt-4"></i>icon-drop
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-drawer icons font-2xl d-block mt-4"></i>icon-drawer
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-docs icons font-2xl d-block mt-4"></i>icon-docs
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-doc icons font-2xl d-block mt-4"></i>icon-doc
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-diamond icons font-2xl d-block mt-4"></i>icon-diamond
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-cup icons font-2xl d-block mt-4"></i>icon-cup
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-calculator icons font-2xl d-block mt-4"></i>icon-calculator
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-bubbles icons font-2xl d-block mt-4"></i>icon-bubbles
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-briefcase icons font-2xl d-block mt-4"></i>icon-briefcase
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-book-open icons font-2xl d-block mt-4"></i>icon-book-open
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-basket-loaded icons font-2xl d-block mt-4"></i>icon-basket-loaded
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-basket icons font-2xl d-block mt-4"></i>icon-basket
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-bag icons font-2xl d-block mt-4"></i>icon-bag
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-action-undo icons font-2xl d-block mt-4"></i>icon-action-undo
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-action-redo icons font-2xl d-block mt-4"></i>icon-action-redo
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-wrench icons font-2xl d-block mt-4"></i>icon-wrench
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-umbrella icons font-2xl d-block mt-4"></i>icon-umbrella
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-trash icons font-2xl d-block mt-4"></i>icon-trash
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-tag icons font-2xl d-block mt-4"></i>icon-tag
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-support icons font-2xl d-block mt-4"></i>icon-support
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-frame icons font-2xl d-block mt-4"></i>icon-frame
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-size-fullscreen icons font-2xl d-block mt-4"></i>icon-size-fullscreen
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-size-actual icons font-2xl d-block mt-4"></i>icon-size-actual
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-shuffle icons font-2xl d-block mt-4"></i>icon-shuffle
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-share-alt icons font-2xl d-block mt-4"></i>icon-share-alt
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-share icons font-2xl d-block mt-4"></i>icon-share
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-rocket icons font-2xl d-block mt-4"></i>icon-rocket
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-question icons font-2xl d-block mt-4"></i>icon-question
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-pie-chart icons font-2xl d-block mt-4"></i>icon-pie-chart
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-pencil icons font-2xl d-block mt-4"></i>icon-pencil
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-note icons font-2xl d-block mt-4"></i>icon-note
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-loop icons font-2xl d-block mt-4"></i>icon-loop
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-home icons font-2xl d-block mt-4"></i>icon-home
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-grid icons font-2xl d-block mt-4"></i>icon-grid
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-graph icons font-2xl d-block mt-4"></i>icon-graph
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-microphone icons font-2xl d-block mt-4"></i>icon-microphone
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-music-tone-alt icons font-2xl d-block mt-4"></i>icon-music-tone-alt
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-music-tone icons font-2xl d-block mt-4"></i>icon-music-tone
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-earphones-alt icons font-2xl d-block mt-4"></i>icon-earphones-alt
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-earphones icons font-2xl d-block mt-4"></i>icon-earphones
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-equalizer icons font-2xl d-block mt-4"></i>icon-equalizer
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-like icons font-2xl d-block mt-4"></i>icon-like
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-dislike icons font-2xl d-block mt-4"></i>icon-dislike
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-control-start icons font-2xl d-block mt-4"></i>icon-control-start
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-control-rewind icons font-2xl d-block mt-4"></i>icon-control-rewind
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-control-play icons font-2xl d-block mt-4"></i>icon-control-play
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-control-pause icons font-2xl d-block mt-4"></i>icon-control-pause
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-control-forward icons font-2xl d-block mt-4"></i>icon-control-forward
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-control-end icons font-2xl d-block mt-4"></i>icon-control-end
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-volume-1 icons font-2xl d-block mt-4"></i>icon-volume-1
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-volume-2 icons font-2xl d-block mt-4"></i>icon-volume-2
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-volume-off icons font-2xl d-block mt-4"></i>icon-volume-off
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-calendar icons font-2xl d-block mt-4"></i>icon-calendar
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-bulb icons font-2xl d-block mt-4"></i>icon-bulb
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-chart icons font-2xl d-block mt-4"></i>icon-chart
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-ban icons font-2xl d-block mt-4"></i>icon-ban
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-bubble icons font-2xl d-block mt-4"></i>icon-bubble
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-camrecorder icons font-2xl d-block mt-4"></i>icon-camrecorder
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-camera icons font-2xl d-block mt-4"></i>icon-camera
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-cloud-download icons font-2xl d-block mt-4"></i>icon-cloud-download
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-cloud-upload icons font-2xl d-block mt-4"></i>icon-cloud-upload
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-envelope icons font-2xl d-block mt-4"></i>icon-envelope
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-eye icons font-2xl d-block mt-4"></i>icon-eye
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-flag icons font-2xl d-block mt-4"></i>icon-flag
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-heart icons font-2xl d-block mt-4"></i>icon-heart
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-info icons font-2xl d-block mt-4"></i>icon-info
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-key icons font-2xl d-block mt-4"></i>icon-key
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-link icons font-2xl d-block mt-4"></i>icon-link
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-lock icons font-2xl d-block mt-4"></i>icon-lock
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-lock-open icons font-2xl d-block mt-4"></i>icon-lock-open
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-magnifier icons font-2xl d-block mt-4"></i>icon-magnifier
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-magnifier-add icons font-2xl d-block mt-4"></i>icon-magnifier-add
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-magnifier-remove icons font-2xl d-block mt-4"></i>icon-magnifier-remove
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-paper-clip icons font-2xl d-block mt-4"></i>icon-paper-clip
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-paper-plane icons font-2xl d-block mt-4"></i>icon-paper-plane
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-power icons font-2xl d-block mt-4"></i>icon-power
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-refresh icons font-2xl d-block mt-4"></i>icon-refresh
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-reload icons font-2xl d-block mt-4"></i>icon-reload
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-settings icons font-2xl d-block mt-4"></i>icon-settings
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-star icons font-2xl d-block mt-4"></i>icon-star
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-symbol-female icons font-2xl d-block mt-4"></i>icon-symbol-female
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-symbol-male icons font-2xl d-block mt-4"></i>icon-symbol-male
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-target icons font-2xl d-block mt-4"></i>icon-target
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-credit-card icons font-2xl d-block mt-4"></i>icon-credit-card
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-paypal icons font-2xl d-block mt-4"></i>icon-paypal
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-tumblr icons font-2xl d-block mt-4"></i>icon-social-tumblr
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-twitter icons font-2xl d-block mt-4"></i>icon-social-twitter
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-facebook icons font-2xl d-block mt-4"></i>icon-social-facebook
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-instagram icons font-2xl d-block mt-4"></i>icon-social-instagram
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-linkedin icons font-2xl d-block mt-4"></i>icon-social-linkedin
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-pinterest icons font-2xl d-block mt-4"></i>icon-social-pinterest
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-github icons font-2xl d-block mt-4"></i>icon-social-github
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-gplus icons font-2xl d-block mt-4"></i>icon-social-gplus
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-reddit icons font-2xl d-block mt-4"></i>icon-social-reddit
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-skype icons font-2xl d-block mt-4"></i>icon-social-skype
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-dribbble icons font-2xl d-block mt-4"></i>icon-social-dribbble
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-behance icons font-2xl d-block mt-4"></i>icon-social-behance
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-foursqare icons font-2xl d-block mt-4"></i>icon-social-foursqare
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-soundcloud icons font-2xl d-block mt-4"></i>icon-social-soundcloud
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-spotify icons font-2xl d-block mt-4"></i>icon-social-spotify
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-stumbleupon icons font-2xl d-block mt-4"></i>icon-social-stumbleupon
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-youtube icons font-2xl d-block mt-4"></i>icon-social-youtube
          </Col>

          <Col xs="6" sm="4" md="3">
            <i className="icon-social-dropbox icons font-2xl d-block mt-4"></i>icon-social-dropbox
          </Col>

          </Row>
      </CardWithCode>
    )
  }
}

class PageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      success: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  render() {
    return (
      <CardWithCode header="Modal">
        <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Button color="success" onClick={this.toggleSuccess} className="mr-1">Success modal</Button>
        <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                className={'modal-success ' + this.props.className}>
          <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </CardWithCode>
    )
  }
}

class PageCalendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWithCode header="Calendar">
        
      </CardWithCode>
    )
  }
}

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  _onClickCode=({cardId})=>{
    let _code = document.getElementById(cardId);
    console.log('_code:',_code);
    this.setState({
      code: _code.innerHTML
    })
  }

  _toggleLoading=(name)=>{
    this.setState({
      [name]: !this.state[name],
      progress: 0.5
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CardWithCode header="CardCode" code={
`<CardWithCode header="Test" code={"code"}>
</CardWithCode>
`}> This Card oo</CardWithCode>
        <CardWithCode header="Buttons">
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              Normal
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="primary">Primary</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="secondary">Secondary</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="success">Success</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="warning">Warning</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="danger">Danger</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="info">Info</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="light">Light</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="dark">Dark</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="link">Link</Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>outline</code>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block outline color="primary">Primary</Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>.btn-ghost-*</code>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="ghost-primary">Primary</Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>.btn-square</code> 
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="success" className="btn-square">Square</Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>.btn-pill</code>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="primary" className="btn-pill">Primary</Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>block</code>
            </Col>
            <Col col="6" sm="12" md="12" xl className="mb-3 mb-xl-0">
              <Button color="primary" size="lg" block>Block level button</Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>With Icon</code>
            </Col>
            <Col col="6" sm="12" md="12" xl className="mb-3 mb-xl-0">
              <Button color="primary">
                <i className="fa fa-lightbulb-o"></i>&nbsp;Standard Button
              </Button>
            </Col>
          </Row>
          <p></p>
          <Row className="align-items-center">
            <Col col="12" xl className="mb-3 mb-xl-0">
              <code>size="lg"</code> or <code>size="sm"</code>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <Button color="primary" size="sm">Standard Button</Button>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <Button color="ghost-success">Ghost Button</Button>
            </Col>
            <Col col="6" sm="4" md="4" xl className="mb-3 mb-xl-0">
              <Button color="warning" size="lg" className="btn-square">Square Button</Button>
            </Col>
          </Row>
        </CardWithCode>
        
        <CardWithCode header="Button Brand">
          <Button size="sm" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
          <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1"><i className="fa fa-twitter"></i><span>Twitter</span></Button>
          <Button size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><i className="fa fa-linkedin"></i><span>LinkedIn</span></Button>
          <Button size="sm" className="btn-flickr btn-brand mr-1 mb-1"><i className="fa fa-flickr"></i><span>Flickr</span></Button>
          <Button size="sm" className="btn-tumblr btn-brand mr-1 mb-1"><i className="fa fa-tumblr"></i><span>Tumblr</span></Button>
          <Button size="sm" className="btn-xing btn-brand mr-1 mb-1"><i className="fa fa-xing"></i><span>Xing</span></Button>
          <Button size="sm" className="btn-github btn-brand mr-1 mb-1"><i className="fa fa-github"></i><span>Github</span></Button>
          <Button size="sm" className="btn-html5 btn-brand mr-1 mb-1"><i className="fa fa-html5"></i><span>HTML5</span></Button>
          <Button size="sm" className="btn-openid btn-brand mr-1 mb-1"><i className="fa fa-openid"></i><span>OpenID</span></Button>
          <Button size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><i className="fa fa-stack-overflow"></i><span>StackOverflow</span></Button>
          <Button size="sm" className="btn-css3 btn-brand mr-1 mb-1"><i className="fa fa-css3"></i><span>CSS3</span></Button>
          <Button size="sm" className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-youtube"></i><span>YouTube</span></Button>
          <Button size="sm" className="btn-dribbble btn-brand mr-1 mb-1"><i className="fa fa-dribbble"></i><span>Dribbble</span></Button>
          <Button size="sm" className="btn-google-plus btn-brand mr-1 mb-1"><i className="fa fa-google-plus"></i><span>Google+</span></Button>
          <Button size="sm" className="btn-instagram btn-brand mr-1 mb-1"><i className="fa fa-instagram"></i><span>Instagram</span></Button>
          <Button size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><i className="fa fa-pinterest"></i><span>Pinterest</span></Button>
          <Button size="sm" className="btn-vk btn-brand mr-1 mb-1"><i className="fa fa-vk"></i><span>VK</span></Button>
          <Button size="sm" className="btn-yahoo btn-brand mr-1 mb-1"><i className="fa fa-yahoo"></i><span>Yahoo</span></Button>
          <Button size="sm" className="btn-behance btn-brand mr-1 mb-1"><i className="fa fa-behance"></i><span>Behance</span></Button>
          <Button size="sm" className="btn-dropbox btn-brand mr-1 mb-1"><i className="fa fa-dropbox"></i><span>Dropbox</span></Button>
          <Button size="sm" className="btn-reddit btn-brand mr-1 mb-1"><i className="fa fa-reddit"></i><span>Reddit</span></Button>
          <Button size="sm" className="btn-spotify btn-brand mr-1 mb-1"><i className="fa fa-spotify"></i><span>Spotify</span></Button>
          <Button size="sm" className="btn-vine btn-brand mr-1 mb-1"><i className="fa fa-vine"></i><span>Vine</span></Button>
          <Button size="sm" className="btn-foursquare btn-brand mr-1 mb-1"><i className="fa fa-foursquare"></i><span>Forsquare</span></Button>
          <Button size="sm" className="btn-vimeo btn-brand mr-1 mb-1"><i className="fa fa-vimeo"></i><span>Vimeo</span></Button>
        </CardWithCode>

        <CardWithCode header="Button Group">
          <ButtonGroup>
            <Button>Left</Button>
            <Button color="primary">Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </CardWithCode>

        <CardWithCode header="Button Dropdown">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => { this.setState({dropdownOpen:!this.state.dropdownOpen}); }}>
            <DropdownToggle caret>
              Button Dropdown
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action Disabled</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </CardWithCode>

        <CardWithCode header="Button Loading">
          <LaddaButton
            className="btn btn-success btn-ladda"
            loading={this.state.expLeft}
            onClick={() => this._toggleLoading('expLeft')}
            data-color="green"
            data-style={EXPAND_LEFT}
          >Expand Left!</LaddaButton>
          <LaddaButton
            className="btn btn-info btn-ladda"
            loading={this.state.expSlideLeft}
            onClick={() => this._toggleLoading('expSlideLeft')}
            data-color="blue"
            data-style={SLIDE_LEFT}
          >Slide Left!</LaddaButton>
          <LaddaButton
            className="btn btn-danger btn-ladda"
            loading={this.state.expZoomIn}
            onClick={() => this._toggleLoading('expZoomIn')}
            data-color="red"
            data-style={ZOOM_IN}
          >Zoom In!</LaddaButton>
        </CardWithCode>

        <CardWithCode header="Loading">
          {/* <div style={{backgroundColor:'black',height:'30px',display:'flex',alignItems:'center',justifyContent:'center'}} dangerouslySetInnerHTML={{__html:
            `<span class="ladda-spinner">
            <div class="" role="progressbar" style="position: absolute; width: 0px; z-index: auto; left: auto; top: auto;">
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-0-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(0deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-1-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(30deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-2-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(60deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-3-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(90deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-4-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(120deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-5-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(150deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-6-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(180deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-7-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(210deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-8-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(240deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-9-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(270deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-10-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(300deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
              <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-100-25-11-12 1s linear infinite;"><div style="position: absolute; width: 5.36px; height: 2px; background: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center 0px; transform: rotate(330deg) translate(5.6px, 0px); border-radius: 1px;"></div></div>
            </div>
          </span>`
          }}></div> */}

          <Card>
            <CardHeader>
              <i className="fa fa-spinner"></i> Rotating plane
            </CardHeader>
            <CardBody>
              <div className="sk-rotating-plane"></div>
            </CardBody>
          </Card>

          <div style={{width:'50px',height:'50px'}} className="img-spinner"></div>
        </CardWithCode>

        <CardWithCode header="Loading">
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </CardWithCode>

        <PageCollapse />
        <PageDropdown />
        <PagePagination />
        <PagePopover />
        <PageProgressBar />
        <PageSwitch />
        <PageTooltip />
        <PageTab />
        <PageTextEditor />
        <PageForm />
        <PageAlert />
        <PageToast />
        <PageBadge />
        <PageModal />
        <PageIcon />
        <PageCalendar />
      </div>
    );
  }
}

export default Buttons;
