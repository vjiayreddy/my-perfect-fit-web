'use client';
import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { BsCartPlus } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Badge from "@mui/material/Badge";

import IconButton from "@mui/material/IconButton";
import UserMenuComponent from "./userMenu";

const UserActionComponent = () => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <Fragment>
      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item>
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <BsCartPlus />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            aria-controls={open ? "products-menu" : undefined}
            ref={anchorRef}
            onClick={handleToggle}
          >
            <BiUserCircle />
          </IconButton>
        </Grid>
      </Grid>

      <UserMenuComponent
        handleClose={handleClose}
        open={open}
        menus={[]}
        zIndex={null}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </Fragment>
  );
};

export default UserActionComponent;
