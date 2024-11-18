import { Box, Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Box className="text-center">
        <Typography variant="h3">Oops! Page Not Found</Typography>
        <Typography variant="h6">
          The page you’re looking for doesn’t exist or was moved.
        </Typography>
      </Box>
    </div>
  );
};

export default PageNotFound;
