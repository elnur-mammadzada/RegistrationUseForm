import { Button } from "@mui/material";
import React from "react";

const MUIButton = ({ type, text }) => {
  return <Button type={type}>{text}</Button>;
};

export default MUIButton;
