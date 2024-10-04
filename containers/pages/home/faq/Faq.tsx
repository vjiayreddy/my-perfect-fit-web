import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FaqsComponent from "@/components/faqs/Faqs";
import { homeFaqs } from "@/utils/mockData";

const HomeFaq = () => {
  return (
    <Fragment>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          FAQ's
        </Typography>
      </Box>
      <FaqsComponent data={homeFaqs}/>
    </Fragment>
  );
};

export default HomeFaq;
