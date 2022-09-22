import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../../App.css"

class Certificate extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: ""
  };
  render() {
    return (
      <body  style={{paddingTop: 94 }} > 
      <div className="certi">
        <div className="Meta">
          <h1>E-Waste Certificate</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
            <img src="https://i.imgur.com/htD2Tm3.png" alt="Certificate"  width="1000px"/>
          </div>
        </div>
      </div>
      </body>
    );
  }
}

export default Certificate;
