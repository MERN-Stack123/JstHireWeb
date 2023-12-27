import { createTheme } from "@mui/material";

const primaryMain = "#00FFAB"
const primaryDark = "#14C38E"
const primaryLight = "#bfdbf7"
const secondaryMain = "#e1e5f2"
const secondaryLight = "#ffffff"

export const  theme = createTheme({
    palette: {
      primary: {
        main: primaryMain,
        dark: primaryDark,
        light: primaryLight
      },
      secondary: {
        main: secondaryMain ,
        light: secondaryLight
        
      },
    },
  });

