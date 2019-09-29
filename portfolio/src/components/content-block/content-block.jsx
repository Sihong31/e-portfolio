import React, { Component } from 'react';

import './content-block.scss';

class ContentBlock extends Component {
  render() {
    return (
      <div className="content-block">
          <h4>{this.props.subHeadline}</h4>
          <h2>{this.props.headline}</h2>
          <p>{this.props.body1}</p>
          <p>{this.props.body2}</p>
          <p>{this.props.body3}</p>
          <a href={this.props.url} target="_blank">{this.props.urlDescription}</a>
      </div>
    )
  }
}

export default ContentBlock;