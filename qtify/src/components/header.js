import "./header.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

const FeedbackButton = {
  borderRadius: "10px",
  width: "12vw",
  fontFamily: "Poppins",
  fontWeight: "700",
  color: "#34C94B",
  backgroundColor: "#121212",
  "&:hover": {
    backgroundColor: "#FFFF",
  },
};

export default function Headers() {
  return (
    <div class="header">
      <div class="logo">Logo</div>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ border: "1.5px solid black", borderRadius: "10px" }}
        backgroundColor="#ffff"
      >
        <TextField
          hiddenLabel
          className="borderless"
          id="searchBox"
          sx={{
            border: "none",
            width: "35vw",
            borderRight: "1.5px solid black",
          }}
          placeholder="Search a Song of your choice"
          size="small"
        />
        <InputAdornment>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      </Stack>

      <Button
        sx={{ textTransform: "none", ...FeedbackButton }}
        variant="contained"
      >
        Give FeedBack
      </Button>
    </div>
  );
}
