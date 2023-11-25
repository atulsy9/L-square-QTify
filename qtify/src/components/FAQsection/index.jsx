import "./faq.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    fontWeight: "500",
    fontSize: "20px",
    minWidth: "1135px",
    color: "#FFFF",
    border: "1px solid #FFFF",
    margin: "10px",
    borderRadius: "10px !important",

    " & .MuiCollapse-entered": {
      backgroundColor: "#FFFF",
      color: "#121212",
      display: "flex",
      alignItem: "center",
      borderRadius: "0px 0px 10px 10px !important",
    },

    "& .MuiButtonBase-root": {
      borderRadius: "10px !important",
      backgroundColor: "#121212",
    },

    "& .MuiAccordionDetails-root": {
      padding: "16px",
    },
  };

  return (
    <div className="faqSection">
      <div className="faqHeading"> FAQs </div>

      <Accordion
        sx={accordionStyle}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34C94B" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={accordionStyle}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#34C94B" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
