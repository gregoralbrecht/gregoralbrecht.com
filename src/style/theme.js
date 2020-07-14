const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  heading: 'inherit',
  monospace: 'Menlo, monospace',
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96]

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
}

const lineHeights = {
  body: 1.5,
  heading: 1.125,
}

const colors = {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  secondary: '#30c',
  muted: '#f6f6f6',
}

export const theme = {
  name: 'default',
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
}
