import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { orange } from 'material-colors'

import Event from './Event'

const styles = {
  main: {
    position: 'absolute',
    top: 32,
    bottom: 0,
    width: '100%',
    background: orange[300],
  },
  timeline: (width) => ({
    position: 'absolute',
    left: '50%',
    width,
    height: '100%',
    background: orange[300],
    WebkitTransform: 'translateX(-50%)',
  }),
}

class TreeView extends Component {
  render() {
    const {
      width, timeline,
    } = this.props
    return (
      <div style={styles.main}>
        <div style={styles.timeline(width)}>
          {timeline.map((event) => {
            return (
              <Event
                key={event.id}
                width={width}
                event={event}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

TreeView.propTypes = {
  width: PropTypes.number,
  timeline: PropTypes.array,
}

export default TreeView
