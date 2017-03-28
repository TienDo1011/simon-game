import React, { Component } from 'react';
import { Checkbox, Col } from 'react-bootstrap';

class Setting extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const props = this.props;
    return (
      <section>
        <Col xs={4}>
          <Checkbox
            bsStyle="default" bsSize="large"
            onClick={this.handleClick}
            checked={props.checked}
          >{props.text}</Checkbox>
        </Col>
      </section>
    );
  }
}

// Setting.propTypes = {
//   onClick: React.PropTypes.func.isRequired,
// };

export default Setting;
