import React from "react";
import Spinner from "react-bootstrap/Spinner";

export type LoadingSpinnerProps = {
  color?: string;
};
export const LoadingSpinner = ({ color = "primary" }) => {
  return <Spinner animation="border" variant={color} />;
};
