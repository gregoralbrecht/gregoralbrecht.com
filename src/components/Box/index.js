import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

import {
  styled,
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  position,
  grid,
} from '../../util/style'

const sx = (props) => css(props.sx)(props.theme)
// eslint-disable-next-line no-underscore-dangle
const base = (props) => css(props.__css)(props.theme)
// eslint-disable-next-line no-shadow
const variant = ({ theme, variant, tx = 'variants' }) =>
  css(get(theme, `${tx}.${variant}`, get(theme, variant)))(theme)

export const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    position: 'relative',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  (props) => props.css,
  compose(space, layout, typography, color, flexbox, position, grid)
)
