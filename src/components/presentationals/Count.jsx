import React from 'react';
import { ProgressBar, Col } from 'react-bootstrap';

function Setting(props) {
  return (
    <section>
      <Col xs={12}>
        <ProgressBar
          now={(props.count / 20) * 100}
          label={`${props.count}/20`}
        />
      </Col>
    </section>
  );
}

Setting.propTypes = {
  count: React.PropTypes.number.isRequired,
};

export default Setting;
