import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { playerClick, simonClick } from '../../actions/actionCreators';
import ButtonComponent from '../presentationals/ButtonComponent.jsx';
import domClick from '../../utils/domClick';

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
  componentDidUpdate() {
    const p = this.props;
    const colors = ['red', 'yellow', 'blue', 'green'];
    if (p.currentSeries.length > 0 &&
      p.currentSeries.length === p.playerSeries.length) {
      const initialColor = Math.floor(Math.random() * 4);
      p.simonClick(colors[initialColor]);
      setTimeout(() => {
        this.props.currentSeries.forEach((el, i) => {
          setTimeout(() => {
            domClick(el);
          }, 600 * i);
        });
      }, 1000);
    }
  }

  render() {
    const colors = ['red', 'yellow', 'blue', 'green'];
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
