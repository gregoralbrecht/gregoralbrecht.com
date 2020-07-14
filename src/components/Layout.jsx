import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-work-sans'
import 'normalize.css'

import { ThemeProvider, theme, Global } from '../style'
import { resetCSS } from '../style/resetCSS'

import { Box } from './Box'
import { Flex } from './Flex'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={resetCSS} />
    <Flex sx={{ height: '100%', flexDirection: 'column' }}>
      <Box sx={{ flex: '1 0 auto' }}>{children}</Box>
    </Flex>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
