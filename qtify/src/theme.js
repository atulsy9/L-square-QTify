import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      light: "##4de364",
      main: "##34c94b",
      dark: "##10b52a",
      contrastText: "#fff",
    },
  },
});

export default theme;
