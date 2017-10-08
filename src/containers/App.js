import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  switchMode,
} from '../actions.js'
import Titlebar from '../components/Titlebar'
import TreeView from '../components/TreeView'

const styles = {
  main: {
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
}

class App extends Component {
  render() {
    const {
      mode, width, timeline,
      handleSwitchMode,
    } = this.props
    return (
      <div style={styles.main}>
        <Titlebar
          mode={mode}
          handleSwitchMode={handleSwitchMode}
        />
        <TreeView
          width={width}
          timeline={timeline}
        />
      </div>
    )
  }
}

App.propTypes = {
  mode: PropTypes.string,
  width: PropTypes.number,
  timeline: PropTypes.array,
  handleSwitchMode: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    mode: state.get('mode'),
    width: state.get('width'),
    timeline: state.get('timeline').toJS(),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSwitchMode: (mode) => {
      dispatch(switchMode(mode))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
