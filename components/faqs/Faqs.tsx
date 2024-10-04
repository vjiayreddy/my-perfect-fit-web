import React, { Fragment } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { faqType } from "@/typescript/types";

interface FaqsComponentProps {
  data: faqType[];
}

const FaqsComponent = ({ data }: FaqsComponentProps) => {
  return (
    <Fragment>
      {data.map((faq) => (
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${faq._id}-content"`}
            id={`panel${faq._id}-header`}
          >
           <Typography fontWeight={600} variant="subtitle1">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Fragment>
  );
};

export default FaqsComponent;
