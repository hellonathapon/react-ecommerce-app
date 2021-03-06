import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        md: 600,
        lg: 1280,
        xl: 1920,
      },
    },
})

export default theme;