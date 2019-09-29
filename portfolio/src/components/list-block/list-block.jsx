import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './list-block.scss';

class ListBlock extends Component {
  renderList = () => {
    const items = this.props.items;
    let rows = [];
    let arrayToPush = [];
    for (let i = 0; i < items.length; i++) {
      arrayToPush.push(items[i]);
      if (arrayToPush.length === 2 || i+1 === items.length) {
        rows.push(arrayToPush);
        arrayToPush = [];
      }
    }

    return rows.map((rowItem, i) => {
      return (
        <Row key={i}>
          <Col md={6} className="column-left">
            {rowItem[0] ? this.renderContent(rowItem[0]) : ''}
          </Col>
          <Col md={6} className="column-right">
            {rowItem[1] ? this.renderContent(rowItem[1]) : ''}
          </Col>
        </Row>
      )
    })
  }

  renderContent = (item) => {
    if (item.boldedCopyStart) {
      const copyArray = item.body.split(item.boldedCopyStart);
      return (
        <>
          <h1>{item.id}</h1>
          <p><strong>{item.boldedCopyStart}</strong>{copyArray[1]}</p>
        </>
      );
    } else if (item.boldedCopyMiddle) {
      const copyArray = item.body.split(item.boldedCopyMiddle);
      return (
        <>
          <h1>{item.id}</h1>
          <p>{copyArray[0]}<strong>{item.boldedCopyMiddle}</strong>{copyArray[1]}</p>
        </>
      );
    } else if (item.boldedCopyEnd) {
      const copyArray = item.body.split(item.boldedCopyEnd);
      return (
        <>
          <h1>{item.id}</h1>
          <p>{copyArray[0]}<strong>{item.boldedCopyEnd}</strong></p>
        </>
      );
    }
    return (
      <div></div>
    );
  }

  render() {
    return (
      <div className="list-block">
        <h2 className="list-block-headline">{this.props.headline}</h2>
        {this.renderList()}
      </div>
    )
  }
}

export default ListBlock;