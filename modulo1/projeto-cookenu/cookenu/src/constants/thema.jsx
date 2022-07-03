import { createTheme } from '@mui/material/styles';
import {primaryColor, neutralColor} from "./cores"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  }
})

export {theme} 