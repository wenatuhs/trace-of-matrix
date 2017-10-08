import {
  SWITCH_MODE,
} from './constants'

export const switchMode = (mode) => ({
  type: SWITCH_MODE,
  mode,
})
