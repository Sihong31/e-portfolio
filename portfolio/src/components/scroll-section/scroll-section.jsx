import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
import './scroll-section.scss';

class ScrollSection extends Component {
  componentDidMount() {
 
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  scrollTo = () => {
    scroll.scrollTo(100);
  }

  scrollMore = () => {
    scroll.scrollMore(100);
  }

  handleSetActive = (to) => {
    console.log(to);
  }

  renderLinks = () => {
    return this.props.links.map((link, i) => {
      return (
        <div className={`scroll-content scroll-content-${i+1}`} key={i}>
          <ScrollLink className="scroll-link" activeClass="active" to={link.scrollToId} spy={true} smooth={true} offset={0} duration={500}></ScrollLink>
          <span className={`scroll-content-text-${i+1}`}>{ link.linkName }</span>
        </div>
      );
    });
  }

  render() {
  	return (
      <div className="scroll-section">
        { this.renderLinks() }
      </div>
    );
  }
};

export default ScrollSection;