"use client";
import React from "react";
import { APP_BAR_SIZE, TOP_INFO_BAR, USER_MENU_LIST } from "@/utils/constants";
import { Box, Card, Container, Grid, styled } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";

const StyledUserlayout = styled(Box)(({ theme }) => ({
  minHeight: `calc(100dvh - ${APP_BAR_SIZE + TOP_INFO_BAR}px)`,
  height: "100%",
  paddingBottom: 100,
  alignItems: "flex-start",
  backgroundColor: theme.palette.grey[200],
  "& .box-1": {
    width: "100%",
    minHeight: 250,
    backgroundColor: theme.palette.primary.main,
  },
  "& .box-2": {
    width: "100%",
    marginTop: -100,
    "& .box-2-user-menu": {
      backgroundColor: theme.palette.common.white,
      "& .MuiTab-root": {
        alignItems: "flex-start",
        fontSize: 16,
      },
    },
    "& .box-2-children-content": {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

interface UserlayoutProps {
  children: React.ReactNode;
  root: React.ReactNode;
}

const Userlayout = ({ children, root }: UserlayoutProps) => {
  return (
    <StyledUserlayout>
      <Box component="div" className="box-1">
        <Container maxWidth="xl">
          {/* <Typography>Account Settings</Typography> */}
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box component="div" className="box-2">
          <Grid container alignItems="flex-start" spacing={4}>
            <Grid item xs={12} md={3} sm={3} xl={3} lg={3}>
              <Box component="div" className="box-2-user-menu">
                <Card>
                  <Box pt={4}>
                    <Tabs
                      centered={false}
                      TabIndicatorProps={{
                        sx: {
                          left: 0,
                          width: 5,
                        },
                      }}
                      variant="standard"
                      orientation="vertical"
                      value={0}
                      aria-label="user-menu-tabs"
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      {USER_MENU_LIST.map((tab) => (
                        <Tab
                          key={tab.name}
                          LinkComponent={Link}
                          href={tab.url}
                          id={tab.name}
                          label={tab.name}
                          sx={{
                            alignItems: "flex-start",
                          }}
                        />
                      ))}
                    </Tabs>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={9} sm={9} xl={9} lg={9}>
              {children}
              {root}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledUserlayout>
  );
};

export default Userlayout;
