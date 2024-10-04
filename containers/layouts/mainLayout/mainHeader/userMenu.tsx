"use client";
import React, { Fragment } from "react";
import Popper from "@mui/material/Popper";
import { styled } from "@mui/material/styles";
import { shouldForwardProp } from "@/utils/actions";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useSession } from "next-auth/react";
import { AUTH_STATUS } from "@/utils/constants";
import NotLoggedInComponent from "./notLoggedIn";
import LoggedInComponent from "./loggedIn";

const StyledMenuPopper = styled(Popper, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<{ zIndex?: number | null }>(["zIndex"], prop),
})<{ zIndex?: number | null }>(({ theme, zIndex }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: zIndex ? zIndex : Number(theme.zIndex.appBar),
}));

const StyledMenuPaper = styled(Paper)(() => ({
  width: "100%",
  padding: `10px 10px`,
}));

interface UserMenuComponentProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus: any;
  zIndex: number | null;
}

const UserMenuComponent = ({
  open,
  zIndex,
  handleClose,
  onKeyDown,
  menus,
  anchorEl,
}: UserMenuComponentProps) => {
  const { data: session, status } = useSession();

  return (
    <StyledMenuPopper
      open={open}
      zIndex={zIndex}
      anchorEl={anchorEl}
      role={undefined}
      transition
      placement="bottom-end"
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <StyledMenuPaper>
            <ClickAwayListener onClickAway={handleClose}>
              {menus?.errors ? (
                <div>{JSON.stringify(menus?.errors)}</div>
              ) : (
                <Fragment>
                  {status !== AUTH_STATUS.LOADING &&
                    status === AUTH_STATUS.AUTHENTICATED && (
                      <LoggedInComponent onKeyDown={onKeyDown} />
                    )}
                  {status !== AUTH_STATUS.LOADING &&
                    status === AUTH_STATUS.UNAUTHENTICATED && (
                    //   <NotLoggedInComponent />
                      <LoggedInComponent onKeyDown={onKeyDown} />
                    )}
                </Fragment>
              )}
            </ClickAwayListener>
          </StyledMenuPaper>
        </Grow>
      )}
    </StyledMenuPopper>
  );
};

export default UserMenuComponent;
