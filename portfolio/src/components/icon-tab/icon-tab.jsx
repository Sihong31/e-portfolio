import React, { Component } from 'react';

import './icon-tab.scss';

class IconTab extends Component {
  render() {
    return (
      <div className="icon-tab">
        <div className="icon-tab-headline" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
          {this.props.headline}
          <span><img src={this.props.icon} alt="icon" /></span>
        </div>
      </div>
    )
  }
}

export default IconTab;