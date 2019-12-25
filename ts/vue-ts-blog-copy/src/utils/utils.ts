export const formatDateTimer = (
  time: Date | string,
  flag = "YYYY:MM:DD hh:mm:ss"
): string => {
  return "";
};

export const isMobileOrPc = () => {
  const reg = /Android|webOS|iPhone|iPad|BlackBerry/i;
  return reg.test(navigator.userAgent);
};
