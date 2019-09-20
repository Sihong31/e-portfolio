import React, { Component } from 'react';

import './image.scss';

class Image extends Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.image}></img>
      </div>
    )
  }
}

export default Image;