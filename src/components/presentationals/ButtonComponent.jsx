import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class ButtonComponent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    const props = this.props;
    return (
      <section>
        <Col xs={6}>
          <Button
            bsStyle={props.color} bsSize="large" key={props.key}
            onClick={this.handleClick}
          />
        </Col>
      </section>
    );
  }
}

ButtonComponent.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default ButtonComponent;
