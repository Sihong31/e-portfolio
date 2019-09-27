import React, { Component } from 'react';

import './sub-headline.scss';

class SubHeadline extends Component {
  render() {
    return (
      <h4>{this.props.text}</h4>
    )
  }
}

export default SubHeadline;