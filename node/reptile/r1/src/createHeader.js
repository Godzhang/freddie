function createHeader(url) {
  let option = {
    url,
    headers: {
      Accept: "",
      "Accept-charset": "",
      "Cache-Control": "",
      Connection: "",
      Cookie: "",
      Host: "",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": ""
    }
  };
  return option;
}

module.exports = createHeader;
