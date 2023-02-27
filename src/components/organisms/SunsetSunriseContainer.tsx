import * as React from "react";
import { Row, Col, Form } from "react-bootstrap";

export type SunsetSunriseContainerProps = {
  sunrise?: string;
  sunset?: string;
};

export const SunsetSunriseContainer: React.FC<SunsetSunriseContainerProps> = ({
  sunrise = "N/A",
  sunset = "N/A",
}) => {
  return (
    <Row className="justify-content-md-center">
      <Col md="auto" className="text-center">
        <Form.Label as="h4">Sunrise and Sunset</Form.Label>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form.Label>Sunrise: {sunrise}</Form.Label>
          </Col>
          <Col md="auto">
            <Form.Label>Sunset: {sunset}</Form.Label>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
