export default (url, param = {}) => {
  const paramStr = Object
    .keys(param)
    .map(key => `${key}=${String(param[key])}`)
    .join('&') || '';
  const jointer = url.includes('?') ? '&' : '?';
  return url + jointer + paramStr;
};
