"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductMenuComponent from "./productMenu";
import { useRouter } from "next/navigation";

const pages = ["Products", "Pricing", "Blog"];

const StyledTabsList = styled(Tabs)(({ theme }) => ({
  minHeight: 62,
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
const StyledTab = styled(Tab)<{ ref?: React.Ref<HTMLDivElement> }>(({theme}) => ({
  minHeight: 62,
  fontWeight: 500,
  color:theme.palette.common.black
}));

const NavigationMenuComponent = () => {
  const [tabIndex, setTabIndex] = React.useState<string | boolean>(false);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  //   const appBarZindexValue = useReactiveVar(appBarZindexVar);
  const anchorRef = React.useRef<HTMLDivElement>(null);
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

  const handleNavigation = (routeName: string) => {
    router.push(routeName);
  }

  return (
    <>
      <StyledTabsList
        value={tabIndex}
        onChange={(_, value) => setTabIndex(value)}
      >
        <StyledTab
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "products-menu" : undefined}
          ref={anchorRef}
          value="1"
          label="Wedding"
          onClick={handleToggle}
        />
        <StyledTab value="2" label="Daily Wear" onClick={()=>handleNavigation('/dashboard')} />
        <StyledTab value="3" label="Accessories" />
      </StyledTabsList>

      <ProductMenuComponent
        handleClose={handleClose}
        open={open}
        menus={[]}
        zIndex={null}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </>
  );
};

export default NavigationMenuComponent;
