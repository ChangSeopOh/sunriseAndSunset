import * as React from "react";
import { Form, FormControl } from "react-bootstrap";

export type InputBoxWithErrorLabelProps = {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: any) => void;
  isInvalid?: boolean;
  errorMessage?: string;
};
const renderErrorMessage = (errorMessage?: string) => {
  if (!errorMessage) return null;

  return (
    <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
  );
};

export const InputBoxWithErrorLabel: React.FC<InputBoxWithErrorLabelProps> = ({
  title,
  value = "",
  placeholder = "Please input the text",
  onChange,
  isInvalid,
  errorMessage,
}) => {
  return (
    <Form.Group>
      {title ? <Form.Label>{title}</Form.Label> : null}
      <FormControl
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e?.target?.value)}
        isInvalid={isInvalid}
      />
      {renderErrorMessage(errorMessage)}
    </Form.Group>
  );
};
