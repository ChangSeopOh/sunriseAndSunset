import { useState } from "react";
import { IP_INFO, SUNSET_SUNRISE_TIME } from "../models/type";
import { useEffectSkipFirst } from "./useEffectSkipFirst";
import config from "../config.json";
import {
  convertResultToIpInfo,
  convertResultToSunsetSunrise,
} from "../utils/formatter";
import { validateIP } from "../utils/validationUtils";

export const useIPLocation = (
  ip: string
): { location: IP_INFO | undefined; isLoading: boolean } => {
  const [location, setLocation] = useState<IP_INFO>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const apiKey = config.FREEGEOIP_API_KEY;
  const fetchIpInfo = async (apiUrl: string) => {
    try {
      setIsloading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch IP info: ${response.statusText}`);
      }
      const data = await response
        .json()
        .then((res) => convertResultToIpInfo(res));
      setLocation(data);
    } catch (error) {
      setLocation(undefined);
      // We can add the error handler later
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffectSkipFirst(() => {
    if (validateIP(ip)) {
      const apiUrl: string = `${config.FREEGEOIP_API_URL}?apikey=${apiKey}&ip=${ip}`;
      fetchIpInfo(apiUrl);
    } else {
      setLocation(undefined);
    }
  }, [ip]);

  return { location, isLoading };
};

export const useSunsetSunriseTime = (
  location?: IP_INFO
): { sunset?: string; sunrise?: string; isLoading: boolean } => {
  const [stringTime, setStringTime] = useState<SUNSET_SUNRISE_TIME>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const fetchSunriseSunset = async (apiUrl: string) => {
    try {
      setIsloading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch sunset & sunrise info: ${response.statusText}`
        );
      }
      const data = await response
        .json()
        .then((res) => convertResultToSunsetSunrise(res));
      setStringTime(data);
    } catch (error) {
      setStringTime(undefined);
      // We can add the error handler later
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffectSkipFirst(() => {
    if (!!location?.latitude && !!location?.longitude) {
      const apiUrl: string = `${config.SUNRISE_SUNSET_URL}?lat=${location.latitude}&lng=${location.longitude}`;
      fetchSunriseSunset(apiUrl);
    } else {
      setStringTime(undefined);
    }
  }, [location?.latitude, location?.longitude]);

  return {
    sunset: stringTime?.sunset,
    sunrise: stringTime?.sunrise,
    isLoading,
  };
};
