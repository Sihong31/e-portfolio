import React, { Component } from 'react';

import './headline-block.scss';

class HeadlineBlock extends Component {
  render() {
    return (
      <div className="headline-block">
        <h4>{this.props.subHeadline}</h4>
        <h1>{this.props.headline}</h1>
        <h2>{this.props.description}</h2>
      </div>
    )
  }
}

export default HeadlineBlock;