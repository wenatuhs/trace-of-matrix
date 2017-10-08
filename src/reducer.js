import { fromJS } from 'immutable'

import {
  MAX_WIDTH,
  SWITCH_MODE,
} from './constants'

const initialState = fromJS({
  mode: 'edit',
  width: Math.min(window.innerWidth, MAX_WIDTH),
  timeline: [
    {
      id: '1',
      time: new Date().getTime(),
      title: 'First Post',
      content: {
        text: 'A new beginning',
        images: [
          {
            url: '/test1.jpg',
            comment: '',
          },
        ],
      },
    },
    {
      id: '2',
      time: new Date().getTime(),
      title: 'Second Post',
      content: {
        text: 'A new journey',
        images: [
          {
            url: '/test2.jpg',
            comment: '',
          },
        ],
      },
    },
  ],
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return state
        .set('mode', action.mode)
    default:
      return state
  }
}

export default reducer
