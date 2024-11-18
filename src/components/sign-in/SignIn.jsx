import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Box className="p-4 bg-white shadow rounded-3" style={{ maxWidth: "420px", width: "100%" }}>
        <Typography className="fw-bold text-center mb-3" variant="h4">
          Sign in to FreshCart
        </Typography>
        <Typography className="text-center mb-4 text-muted" variant="h6">
          Enter your email and password to sign in.
        </Typography>
        <Box className="mb-3">
          <TextField fullWidth size="small" placeholder="Email" variant="outlined" />
        </Box>
        <Box className="mb-3">
          <TextField
            fullWidth
            size="small"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button fullWidth variant="contained" color="primary" className="mb-3">
          Sign In
        </Button>
        <Typography className="text-center" variant="h6">
          Don’t have an account?{" "}
          <Link className="text-decoration-none text-primary fw-bold" to="/sign-up">
            Sign Up
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default SignIn;
