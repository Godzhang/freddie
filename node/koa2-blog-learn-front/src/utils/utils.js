export const isLogin = () => {
  const cookies = {};
  const cookie = document.cookie;
  cookie
    .split(";")
    .map(item => item.trim().split("="))
    .forEach(item => {
      cookies[item[0]] = item[1];
    });
  return !!cookies.loginStatus;
};
