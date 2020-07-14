import React, { ReactNode } from 'react'

import { ThemeProvider, theme } from '../../style'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export { Layout }
