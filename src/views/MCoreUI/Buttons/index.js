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
      <CardWithCode header="Dropdown">
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
      <CardWithCode header="Dropdown">
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
      <CardWithCode header="Dropdown">
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
      <CardWithCode header="Dropdown">
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
      </div>
    );
  }
}

export default Buttons;
