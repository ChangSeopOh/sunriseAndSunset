import * as React from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { DEBOUNCE_DELAY } from "../../utils/constants";
import { debounce } from "lodash";
import { validateIP } from "../../utils/validationUtils";
import { useIPLocation, useSunsetSunriseTime } from "../../hooks/useDataFetch";
import { MainContainer, MainContainerProps } from "../../components";
import { parseLocation } from "../../utils/formatter";

/*
  This component only handles data, the UI components are in the components dir.
*/
const Main = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [validIp, setValidIp] = useState<string>("");
  // The location is retrieved via the IP API after 1 second automatically.
  const debounceValue = useRef(debounce(setValidIp, DEBOUNCE_DELAY)).current;
  const { location, isLoading } = useIPLocation(validIp);
  const {
    sunrise,
    sunset,
    isLoading: isSunsetLoading,
  } = useSunsetSunriseTime(location);
  /*
    useMemo can be used to memoize the isInvalidIP and locationValue values 
    so that they're only re-computed when their dependencies change, 
    which in this case are validIp and location.
  */
  const isInvalidIP: boolean = useMemo(() => {
    return validIp !== "" && !validateIP(validIp);
  }, [validIp]);
  const locationValue: string = useMemo(() => {
    return location ? parseLocation(location) : "";
    // eslint-disable-next-line
  }, [location?.city, location?.region_name, location?.country_name]);

  /*
    useCallback can be used to memoize the handleUpdateIpAddress function 
    so that it's only re-created when its dependencies change, 
    which in this case are debounceValue and setIpAddress.
  */
  const handleUpdateIpAddress = useCallback(
    (value: string = "") => {
      setIpAddress(value);
      debounceValue(value);
    },
    [debounceValue, setIpAddress]
  );

  const mainContainerProps: MainContainerProps = {
    isLoading: isLoading || isSunsetLoading,
    locationContainerProps: {
      location: locationValue,
      isInvalidIP,
      ipAddress,
      onChangeIpAddress: handleUpdateIpAddress,
    },
    sunsetSunriseContainerProps: {
      sunrise,
      sunset,
    },
  };
  return <MainContainer {...mainContainerProps} />;
};

export default Main;
