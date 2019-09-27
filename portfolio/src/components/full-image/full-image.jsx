import React, { Component } from 'react';

import './full-image.scss';

class FullImage extends Component {

  render() {
    return (
      <div className="full-image">
        <img src={this.props.imageUrl} alt={this.props.altText} />
      </div>
    )
  }
}

export default FullImage;