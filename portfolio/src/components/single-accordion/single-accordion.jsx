import React, { Component } from 'react';

import './single-accordion.scss';

class SingleAccordion extends Component {
  state = { isActive: false, isFirstRun: true }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive, isFirstRun: false })
  }

  renderIcon = () => {
    if (!this.state.isActive) {
      return <span>+</span>
    } else {
      return <span>-</span>
    }
  }

  render() {
    let activeClass = '';
    if (this.state.isActive) {
      activeClass += 'active';
    } else if (!this.state.isActive && !this.state.isFirstRun) {
      activeClass += 'inactive';
    }

    return (
      <div className="single-accordion" onClick={this.handleClick}>
        <div className="single-accordion-headline" style={{ backgroundColor: `${this.props.backgroundColor}` }}>
          {this.props.headline}
          {this.renderIcon()}
        </div>
        <div className={`single-accordion-content ${activeClass}`}>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default SingleAccordion;