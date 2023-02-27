export const validateIP = (ip: string | undefined): boolean => {
  if (!ip) return false;
  const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
  return ipRegex.test(ip);
};
