import PropTypes from 'prop-types'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { styled, sx, variant, space, propTypes } from '../style'

const Text = styled('p', { shouldForwardProp })(
  variant({
    prop: 'align',
    variants: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  }),
  space,
  sx
)

Text.displayName = 'Text'

Text.defaultProps = {
  size: 'standard',
  align: 'left',
  tone: 'neutral',
}

Text.propTypes = {
  /** Change the rendered element */
  as: PropTypes.string,
  ...propTypes.space,
}

export { Text }
