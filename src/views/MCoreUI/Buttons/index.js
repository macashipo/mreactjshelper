import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, ButtonGroup, Col, Row } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';

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
`}> This Card </CardWithCode>
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
      </div>
    );
  }
}

export default Buttons;
