export interface ThemeProps {
  theme: {
    breakpoints: {
      l: string
      m: string
      s: string
    }
    colors: {
      black: string
      darkBlue: string
      grey: string
      white: string
    }
    fonts: {
      body: string
      heading: string
    }
  }
}

export default {
  breakpoints: {
    l: '980px',
    m: '768px',
    s: '320px',
  },
  colors: {
    black: '#000000',
    darkBlue: '#202f3c',
    grey: '#49555e',
    white: '#ffffff',
  },
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: '"Roboto", sans-serif',
  },
}
