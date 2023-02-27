import * as React from "react";
import { Container, Row } from "react-bootstrap";
import {
  Divider,
  LoadingSpinner,
  LocationContainer,
  LocationContainerProps,
  SunsetSunriseContainer,
  SunsetSunriseContainerProps,
} from "../index";

/*
  The UI components doesn't handle any data to reuse them anywhere.
*/

export type MainContainerProps = {
  isLoading?: boolean;
  sunsetSunriseContainerProps: SunsetSunriseContainerProps;
  locationContainerProps: LocationContainerProps;
};
export const MainContainer: React.FC<MainContainerProps> = ({
  isLoading = false,
  locationContainerProps,
  sunsetSunriseContainerProps,
}) => {
  return (
    <Container style={{ paddingTop: "1rem" }}>
      <LocationContainer {...locationContainerProps} />
      <Divider />
      <SunsetSunriseContainer {...sunsetSunriseContainerProps} />
      <Row
        className="justify-content-md-center text-center"
        style={{ display: "block" }}
      >
        {isLoading ? <LoadingSpinner /> : null}
      </Row>
    </Container>
  );
};
