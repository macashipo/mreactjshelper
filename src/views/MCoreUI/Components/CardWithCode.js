import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Collapse } from 'reactstrap';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

class C extends Component {
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
      code: '',
      collapse: false,
    };
  }

  _onEntering=()=> {
    this.setState({ status: 'Opening...' });
  }

  _onEntered=()=> {
    this.setState({ status: 'Opened' });
  }

  _onExiting=()=> {
    this.setState({ status: 'Closing...' });
  }

  _onExited=()=> {
    this.setState({ status: 'Closed' });
  }

  render() {
    return (
      <Card id="card-buttons">
        <CardHeader>
          <i className="fa fa-align-justify"></i><strong>{this.props.header}</strong>
          <div className="card-header-actions">
            
          </div>
        </CardHeader>
        <CardBody>
          { this.props.children }
        </CardBody>
        
        {
          this.props.code &&
          <div>
            <CardBody className="codebox-desc" onClick={
              ()=>{
                this.setState({collapse: !this.state.collapse})
              }}>
              <span>View Code</span>
              <a className="code-toggle"><i className="fa fa-chevron-down"></i></a>
            </CardBody>
            <Collapse isOpen={this.state.collapse} onEntering={this._onEntering} onEntered={this._onEntered} onExiting={this._onExiting} onExited={this._onExited}>
              <CardBody style={{padding:'0px'}}>
                <SyntaxHighlighter showLineNumbers={true} language='javascript' style={docco}>{
                  this.props.code
                }</SyntaxHighlighter>
              </CardBody>
            </Collapse>
          </div>
        }
        
      </Card>
    );
  }
}

export default C;
