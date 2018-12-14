// // App.jsx
// import React from "react";
// import Hello from "./Hello";
// import { PageHeader } from "react-bootstrap";
// require('../css/fullstack.css');
//
// export default class App extends React.Component {
//   // constructor(props) {
// 	// 	super(props);
// 	// }
//
//   render () {
//     return (
//       <PageHeader>
//         <div className='header-contents'>
//           <Hello name='Chris' />
//         </div>
//       </PageHeader>
//     );
//   }
// }

import React, { Component } from 'react';
import Send from "./Send";
require('../css/fullstack.css');

// Import Brace and the AceEditor Component
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/python';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';

const defaultValue = `def foo():
  print('this is a function')

foo()`;

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: defaultValue,
      theme: 'github',
      mode: 'python',
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue,
    });
  }

  parse(str) {
    return str.replace(/\n/g, "<br/>");
  }

  render() {
    return (
      <div className="desc">
        <h1>CodeStyle</h1>
        <h3>Learn Good Code Style for Python</h3>
        <p>CodeStyle, created by Gabriella Roman (@gsroman) and
          Christopher Trinh (@ctrinh), helps people overcome a
          fundamental barrier to learning programming: understanding
          how to correctly style their code when they write it.
        </p>
        <p>
          Write code in your web browser and get tips on how to
          make it easier to read for yourself and for others.
        </p>
        <AceEditor
          mode={this.state.mode}
          theme={this.state.theme}
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          value={this.state.value}
        />
        <p>{console.log(this.state.value)}</p>
        <Send text={this.state.value} />

      </div>
    );
  }
}

export default App;
