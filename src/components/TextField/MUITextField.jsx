import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

const MUITextField = forwardRef(
  ({ label, variant, placeholder, id, type, ...rest }, ref) => {
    return (
      <div>
        <TextField
          inputRef={ref}
          label={label}
          variant={variant}
          placeholder={placeholder}
          id={id}
          type={type}
          inputProps={{ ...rest }}
        />
      </div>
    );
  }
);

export default MUITextField;
