import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleOn, toggleStrict, simonClick } from '../../actions/actionCreators';
import Setting from '../presentationals/Setting.jsx';
import Count from '../presentationals/Count.jsx';

const mapStateToProps = state => ({
  isOn: state.isOn,
  strict: state.strict,
  currentSeries: state.currentSeries,
});

const mapDispatchToProps = dispatch => ({
  toggleOn: () => dispatch(toggleOn()),
  toggleStrict: () => dispatch(toggleStrict()),
  simonClick: color => dispatch(simonClick(color)),
});

class Settings extends Component {
  constructor() {
    super();
    this.handleSimonClick = this.handleSimonClick.bind(this);
  }

  handleSimonClick() {
    const colors = ['red', 'yellow', 'blue', 'green'];
    const initialColor = Math.floor(Math.random() * 4);
    this.props.simonClick(colors[initialColor]);
  }

  render() {
    console.log('Settings=========>', this.props);
    const props = this.props;
    return (
      <section>
        <Grid>
          <Row>
            <Count count={props.currentSeries.length} />
            <Setting text="Strict" onClick={props.toggleStrict} checked={props.strict} />
            <Setting text="Start" onClick={this.handleSimonClick} />
            <Setting text={props.isOn ? 'Turn off' : 'Turn on'}
              onClick={props.toggleOn} checked={props.isOn} />
          </Row>
        </Grid>
      </section>
    );
  }
}

// Settings.propTypes = {
//   board: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
//   move: React.PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
