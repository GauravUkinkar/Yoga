import React, { useState } from "react";
import "./Accordian.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const Accordian = () => {
  const [expanded, setExpanded] = useState("panel1"); // ✅ Default open

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // ✅ Only one open at a time
  };

  return (
    <div className="accordian-parent parent">
      <div className="accordian-cont cont">
        <div className="content-group">
          <div className="sec-indicator">FAQ</div>
          <h2>Know Before You Flow</h2>
          <p>
            Here are answers to the most common questions about sessions,
            programs, and what to expect.
          </p>
        </div>

        <div className="accordian">
          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1-header">
              <Typography>What should I bring to my first session?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Wear comfortable clothing, bring a yoga mat, and a water bottle.
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel2-header">
              <Typography>Do I need prior experience?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Not at all! All levels are welcome, and sessions are customized.
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel3-header">
              <Typography>How are the sessions conducted?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Sessions are available both in person and online for your convenience.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
