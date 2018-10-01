import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <p>the header Component should go here</p> */}
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

const mapStateToProps = (state) => (
  {loading: state.ajaxCallsInProgress > 0}
)

export default connect(mapStateToProps)(App);
