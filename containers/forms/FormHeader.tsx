import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

interface FormHeaderProps {
  title: string;
}

const FormHeader = ({ title }: FormHeaderProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.back();
  };
  return (
    <Box width="100%" position="relative">
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography textAlign="center" variant="h5">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Box top={-2} left={0} position="absolute">
        <Button
          sx={{ padding: 0, minHeight: 0, minWidth: 0 }}
          onClick={handleNavigation}
          variant="text"
          color="secondary"
          startIcon={<Icon icon="ep:back" />}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default FormHeader;
