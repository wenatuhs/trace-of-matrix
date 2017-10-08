import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { orange } from 'material-colors'

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    height: 32,
    width: '100%',
    paddingLeft: 4,
    paddingRight: 4,
    background: orange[500],
  },
  title: {
    display: 'inline-block',
    paddingLeft: 4,
    paddingRight: 4,
    lineHeight: '32px',
    fontWeight: 'bold',
    color: 'white',
  },
  tool: {
    display: 'inline-block',
    paddingLeft: 4,
    paddingRight: 4,
    color: 'white',
  },
}

class Titlebar extends Component {
  render() {
    const {
      mode,
      handleSwitchMode,
    } = this.props
    return (
      <div style={styles.main}>
        <div style={styles.tool} onClick={() => handleSwitchMode('pan')}>
          <i className="fa">magic</i>
        </div>
        <div style={styles.title}>
          Trace of Matrix
        </div>
      </div>
    )
  }
}

Titlebar.propTypes = {
  mode: PropTypes.string,
  handleSwitchMode: PropTypes.func,
}

export default Titlebar
