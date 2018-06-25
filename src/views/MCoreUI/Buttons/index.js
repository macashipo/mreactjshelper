import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options : {
        lineNumbers: true,
        readOnly: false,
        mode: 'markdown',
        theme: 'eclipse',
        autofocus: true
      },
      code: ''
    };
  }

  _onClickCode=({cardId})=>{
    let _code = document.getElementById(cardId);
    console.log('_code:',_code);
    this.setState({
      code: _code.innerHTML
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card id="card-buttons">
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Buttons</strong>
            <div className="card-header-actions">
              <button onClick={()=>this._onClickCode({cardId:'card-buttons'})}>
                <small className="text-muted">Code</small>
              </button>
            </div>
          </CardHeader>
          <CardBody>
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
          </CardBody>
          <CardBody>
            <CodeMirror
              ref={(node) => this.editor = node}
              value={this.state.code}
              options={this.state.options}
              onBeforeChange={(editor, data, value) => { this.setState({value}); }}
              onChange={(editor, metadata, value) => { }}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Buttons;
