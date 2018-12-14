import React from "react";
import { Button } from "react-bootstrap";

var $ = require('jquery');

export default class Send extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      suggestions: ''
    };
    // This binding is necessary to make `this` work in the callback
    this.postPythonText = this.postPythonText.bind(this);
  }

  // personaliseGreeting(greeting) {
  // this.setState({greeting: greeting + ' ' + this.props.name + '!'});    }

  postPythonText() {
    $.post(window.location.href + 'send', this.props.text , (data) => {
      console.log(data);
      console.log(data);
      this.setState({
        suggestions: data,
      })
    });
  }

  render () {
    return (
      <div>
        <hr/>
        <Button bsSize="small" bsStyle="success" onClick={this.postPythonText}>
          Send code!
        </Button>
        <hr/>
        <textarea readOnly value={this.state.suggestions} />
      </div>
    )
  }
}
