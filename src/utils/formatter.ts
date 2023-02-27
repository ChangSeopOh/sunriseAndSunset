import { IP_INFO, SUNSET_SUNRISE_TIME } from "../models/type";

export const convertResultToIpInfo = (result: any): IP_INFO => {
  const { ip, location } = result.data;

  const ipInfo: IP_INFO = {
    ip,
    country_name: location?.country?.name_translated,
    region_name: location?.region?.name_translated,
    city: location?.city?.name,
    latitude: location?.latitude,
    longitude: location?.longitude,
  };

  return ipInfo;
};

export const convertResultToSunsetSunrise = (
  result: any
): SUNSET_SUNRISE_TIME => {
  return { sunrise: result?.results?.sunrise, sunset: result?.results?.sunset };
};

const handleAddSpace = (str?: string | null): string => {
  if (str?.trim()) {
    return str + ", ";
  } else {
    return "";
  }
};

export const parseLocation = (ipInfo: IP_INFO): string => {
  return `${handleAddSpace(ipInfo?.city)}${handleAddSpace(
    ipInfo?.region_name
  )}${handleAddSpace(ipInfo?.country_name)}`
    .trim()
    .replace(/,*$/, "");
};
