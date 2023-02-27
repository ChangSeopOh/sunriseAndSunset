import * as React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { InputBoxWithErrorLabel } from "../molecules";

export type LocationContainerProps = {
  ipAddress?: string;
  isInvalidIP?: boolean;
  location?: string;
  onChangeIpAddress: (ipAddress: string) => void;
};
export const LocationContainer: React.FC<LocationContainerProps> = ({
  ipAddress = "",
  onChangeIpAddress,
  isInvalidIP = false,
  location = "",
}) => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto">
        <InputBoxWithErrorLabel
          title={"Enter your IP address"}
          placeholder={"e.g. 192.0.2.1"}
          value={ipAddress}
          onChange={onChangeIpAddress}
          isInvalid={isInvalidIP}
          errorMessage={"This is an invalid IP address."}
        />
        <Form.Text className="text-muted">{location}</Form.Text>
      </Col>
    </Row>
  );
};
