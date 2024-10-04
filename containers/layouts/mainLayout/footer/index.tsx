'use client';
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

import Typography from "@mui/material/Typography";
import { Divider, IconButton } from "@mui/material";
const StyledFooterMainBox = styled(Box)(({ theme }) => ({
  minHeight: 300,
  backgroundColor: theme.palette.grey[900],
  paddingTop: 75,
  paddingBottom: 50,
  "& .logo__title": {
    color: theme.palette.common.white,
    marginBottom: 20,
  },
  "& .address": {
    color: theme.palette.grey[700],
    marginTop: 10,
    width: "56%",
    margin: "0px auto",
  },
  "& .menu_heading": {
    color: theme.palette.common.white,
    marginBottom: 20,
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  "& .MuiButtonBase-root": {
    padding: 0,
    color: theme.palette.grey[700],
  },
  "& .MuiListItemIcon-root": {
    minWidth: 25,
  },
  "& .MuiListItemText-primary": {
    color: `${theme.palette.grey[700]} !important`,
  },
}));

const StyledSectionDivider = styled(Divider)(({ theme }) => ({
  width: 400,
  borderColor: theme.palette.grey[800],
  marginTop: 20,
  marginBottom: 10,
}));

const FooterComponent = () => {
  return (
    <StyledFooterMainBox>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
        >
          <Grid item>
            <Typography
              className="logo__title"
              color=""
              textAlign="center"
              variant="h4"
            >
              LOGO
            </Typography>
            <Typography
              className="address"
              color=""
              textAlign="center"
              variant="body1"
            >
              Plot No. 67, Santosh Nagar Dattanagar Road, Opposite Balaji
              Garage, Katraj, Pune-411046, Maharashtra, India
            </Typography>
          </Grid>
          <Grid
            item
            spacing={2}
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid item>
              <StyledList>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <BiSolidPhoneCall />
                  </ListItemIcon>
                  <ListItemText
                    primary={"+91-9390442674"}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </StyledList>
            </Grid>
            <Grid item>
              <StyledList>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <AiOutlineMail />
                  </ListItemIcon>
                  <ListItemText
                    primary={"atatstraders@gmail.com"}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </StyledList>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <StyledSectionDivider />
          </Grid>
          <Grid item alignItems="center" justifyContent="center" container>
            <Grid item>
              <IconButton sx={(theme) => ({ color: theme.palette.grey[700] })}>
                <AiOutlineTwitter />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={(theme) => ({ color: theme.palette.grey[700] })}>
                <AiFillInstagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={(theme) => ({ color: theme.palette.grey[700] })}>
                <AiFillFacebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={(theme) => ({ color: theme.palette.grey[700] })}>
                <RiWhatsappFill />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={(theme) => ({ color: theme.palette.grey[700] })}>
                <FaTelegram />
              </IconButton>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Grid item>
              <StyledList>
                <ListItemButton sx={{ alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ color: "inherit", marginTop: "8px" }}>
                    <FaRegAddressCard />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        Plot No. 67, Santosh Nagar Dattanagar Road, Opposite
                        Balaji Garage, Katraj, Pune-411046, Maharashtra, India
                      </Typography>
                    }
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <BiSolidPhoneCall />
                  </ListItemIcon>
                  <ListItemText
                    primary={"+91-9390442674"}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <AiOutlineMail />
                  </ListItemIcon>
                  <ListItemText
                    primary={"atatstraders@gmail.com"}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </StyledList>
            </Grid>
            <Grid item>Addrss</Grid>
          </Grid> */}
          {/* <Grid item md={3}>
            <Typography className="menu_heading" color="" variant="h6">
              Products
            </Typography>
            <StyledList>
              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Spray Gun</ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Polyster Putty</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Hvil Paint Spray Gun</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Paint Thinner</ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Enamel Paint</ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Airbrush Spray Gun</ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemText>Spray Paint</ListItemText>
              </ListItemButton>
            </StyledList>
          </Grid>
          <Grid item md={3}>
            <Typography className="menu_heading" color="" variant="h6">
              Find Us
            </Typography>
            <StyledList>
              <ListItemButton sx={{ alignItems: "flex-start" }}>
                <ListItemIcon sx={{ color: "inherit", marginTop: "8px" }}>
                  <FaRegAddressCard />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography>
                      Plot No. 67, Santosh Nagar Dattanagar Road, Opposite
                      Balaji Garage, Katraj, Pune-411046, Maharashtra, India
                    </Typography>
                  }
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <BiSolidPhoneCall />
                </ListItemIcon>
                <ListItemText
                  primary={"+91-9390442674"}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <AiOutlineMail />
                </ListItemIcon>
                <ListItemText
                  primary={"atatstraders@gmail.com"}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            </StyledList>
          </Grid> */}
        </Grid>
      </Container>
    </StyledFooterMainBox>
  );
};

export default FooterComponent;
