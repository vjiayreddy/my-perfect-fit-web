import { homeMedia } from "@/utils/mockData";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const StyledHomeMediaPress = styled(Box)(({ theme }) => ({
  "& .__media_card_wrapper": {
    minWidth: 260,
    position: "relative",
    minHeight: 150,
    display: "inline-block",
    float: "left",
    marginRight:20
  },
  "& .__next_image":{
    objectFit:"contain",
    objectPosition:"center",
    filter:"grayscale(100%)",
    "&:hover":{
      filter:"grayscale(0%)",
      cursor:"pointer"
    }
  }
}));

const HomeMediaPress = () => {
  return (
    <StyledHomeMediaPress>
      <Box mb={10}>
        <Typography
          gutterBottom
          textAlign="center"
          fontWeight={700}
          variant="h4"
        >
          Media & Press Releases
        </Typography>
      </Box>
      <Box>
        <Marquee gradient={true} pauseOnHover={true}>
          {homeMedia.map((media) => (
            <Box
              key={media._id}
              component="div"
              className="__media_card_wrapper"
            >
              <Image className="__next_image" layout="fill" src={media.image} alt={media.name} />
            </Box>
          ))}
        </Marquee>
      </Box>
    </StyledHomeMediaPress>
  );
};

export default HomeMediaPress;
