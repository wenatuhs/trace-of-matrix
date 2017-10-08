import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'
import { orange, white, grey } from 'material-colors'

const calHeight = (width) => width * 0.375
const calSize = (width) => width * 0.375 - 32
const calBorder = (width) => calSize(width) * 0.04
const calFrame = (width) => 32
// const calFrame = (width) => calSize(width) * 0.25

const styles = {
  main: (width) => ({
    position: 'relative',
    height: calHeight(width),
    background: grey[500],
  }),
  summary: (width) => ({
    position: 'absolute',
    top: calHeight(width) / 2,
    width: '50%',
    WebkitTransform: 'translateY(-50%)',
  }),
  frame: (width) => ({
    padding: calFrame(width),
  }),
  time: {
    fontSize: 14,
    color: white,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: white,
  },
  border: (width) => {
    const size = calSize(width)
    return {
      position: 'absolute',
      top: '50%',
      left: '75%',
      width: size,
      height: size,
      borderRadius: size / 2,
      background: orange[300],
      WebkitTransform: 'translate(-50%, -50%)',
    }
  },
  cover: (width) => {
    const border = calBorder(width)
    const radius = calSize(width) / 2 - border
    return {
      position: 'absolute',
      top: border,
      left: border,
      width: radius * 2,
      height: radius * 2,
      WebkitClipPath: `circle(${radius}px at 50% 50%)`,
    }
  },
  image: (width) => ({
    width: calSize(width) - calBorder(width) * 2,
  }),
}

class Event extends Component {
  render() {
    const {
      width, event,
    } = this.props
    return (
      <div style={styles.main(width)}>
        <div style={styles.summary(width)}>
          <div style={styles.frame(width)}>
            <div style={styles.time}>
              {dateFormat(event.time, 'mmm d, yyyy')}
            </div>
            <div style={styles.title}>
              {event.title}
            </div>
          </div>
        </div>
        <div style={styles.border(width)}>
          <div style={styles.cover(width)}>
            <img
              style={styles.image(width)}
              src={event.content.images[0].url}
              alt={event.content.images[0].comment}
            />
          </div>
        </div>
      </div>
    )
  }
}

Event.propTypes = {
  width: PropTypes.number,
  event: PropTypes.object,
}

export default Event
