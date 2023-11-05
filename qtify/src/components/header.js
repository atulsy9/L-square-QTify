import "./header.css";
import Button from "@mui/material/Button";

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
      <Button
        sx={{ textTransform: "none", ...FeedbackButton }}
        variant="contained"
      >
        Give FeedBack
      </Button>
    </div>
  );
}
