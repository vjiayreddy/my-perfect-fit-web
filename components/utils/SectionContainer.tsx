import React from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import { Breakpoint, styled } from "@mui/material";

interface StyledSectionContainerProps extends ContainerProps {
  children: React.ReactNode;
  maxWidth?: Breakpoint | false;
}

const StyledSectionContainer = styled(Container)(({ theme }) => ({
  paddingTop: 100,
  paddingBottom: 50,
}));

const SectionContainer = ({
  children,
  ...props
}: StyledSectionContainerProps) => {
  return <StyledSectionContainer {...props}>{children}</StyledSectionContainer>;
};

export default SectionContainer;
