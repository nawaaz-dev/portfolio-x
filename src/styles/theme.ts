import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light", // Default to light mode
    background: {
      default: "#ffffff", // --background
      paper: "#ffffff", // You can customize this if needed
    },
    text: {
      primary: "#171717", // --text-primary
      secondary: "#9ca3af", // --text-secondary
    },
    primary: {
      main: "#ffa500", // --primary
    },
    secondary: {
      main: "#f91880", // --active
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif", // Matches the body font-family
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a", // --background (dark mode)
      paper: "#0a0a0a", // Matches --background
    },
    text: {
      primary: "#ededed", // --text-primary (dark mode)
      secondary: "#9ca3af", // --text-secondary
    },
    primary: {
      main: "#ffa500", // --primary
    },
    secondary: {
      main: "#f91880", // --active
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif", // Matches your CSS body font-family
  },
});
