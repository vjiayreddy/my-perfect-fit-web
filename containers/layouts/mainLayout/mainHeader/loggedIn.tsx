"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiBox } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineUnsubscribe } from "react-icons/md";

interface loggedInComponentProps {
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
}

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiTypography-root": {
    fontSize: 14,
    color: "GrayText",
    "&:hover": {
      color: theme.palette.text.primary,
      textDecoration: "underline",
    },
  },
}));

const StyledUserInfo = styled(Box)(({ theme }) => ({
  minWidth: 200,
  padding: `10px 10px`,
}));

const LoggedInComponent = ({onKeyDown}: loggedInComponentProps) => {
  return (
    <Box>
      <StyledUserInfo>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              sx={{ width: 56, height: 56 }}
              variant="circular"
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_h5nToWbkX_B2hHHQfJScgYLo2Yc7cDSXRg&usqp=CAU`}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Alex Jhon</Typography>
            <Typography color="GrayText" variant="body2">
              alex@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </StyledUserInfo>
      <List
        id="products-menu"
        aria-labelledby="products-menu"
        onKeyDown={onKeyDown}
        dense={true}
      >
        <StyledListItemButton>
          <ListItemIcon sx={{ minWidth: 20 }}>
            <BiBox />
          </ListItemIcon>
          <ListItemText>Orders</ListItemText>
        </StyledListItemButton>
        <StyledListItemButton>
          <ListItemIcon sx={{ minWidth: 20 }}>
            <FiSettings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </StyledListItemButton>
        <StyledListItemButton>
          <ListItemIcon sx={{ minWidth: 20 }}>
            <MdOutlineUnsubscribe />
          </ListItemIcon>
          <ListItemText>Subscriptions</ListItemText>
        </StyledListItemButton>
        <StyledListItemButton>
          <ListItemIcon sx={{ minWidth: 20 }}>
            <AiOutlineLogout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </StyledListItemButton>
      </List>
    </Box>
  );
};

export default LoggedInComponent;
