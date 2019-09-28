import React, { Component } from 'react';

import './standout.scss';

class Standout extends Component {

  render() {
    return (
      <div className="standout">
        <p>{this.props.headline}</p>
        <div className="standout-content" style={{ borderLeft: `6px solid ${this.props.color}` }}>
          <p>
            {this.props.content}
          </p>
          <h6 className="standout-caption">
            {this.props.caption}
          </h6>
        </div>
      </div>
    );
  }
}


export default Standout;