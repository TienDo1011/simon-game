import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { playerClick, simonClick } from '../../actions/actionCreators';
import ButtonComponent from '../presentationals/ButtonComponent.jsx';

const shortid = require('shortid');

const mapStateToProps = state => ({
  currentSeries: state.currentSeries,
  playerSeries: state.playerSeries,
  isOn: state.isOn,
  strict: state.strict,
  player: state.player,
  lost: state.lost,
});

const mapDispatchToProps = dispatch => ({
  playerClick: color => dispatch(playerClick(color)),
  simonClick: color => dispatch(simonClick(color)),
});

class Buttons extends Component {
  render() {
    const colors = ['red', 'yellow', 'blue', 'green'];
    console.log('Buttons=========>', this.props);
    return (
      <section>
        <Grid>
          <Row>
            {
              colors.map(color => <ButtonComponent color={color} key={shortid.generate()} onClick={this.props.playerClick} />)
            }
          </Row>
        </Grid>
      </section>
    );
  }
}

// Buttons.propTypes = {
//   board: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
//   move: React.PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
