var path = require("path");

/**
 * GET /favicon.ico
 *
 * host: reqres.in
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.44
 * accept: image/webp,image/apng,image/ *,* /*;q=0.8
 * sec-fetch-site: same-origin
 * sec-fetch-mode: no-cors
 * sec-fetch-dest: image
 * referer: http://localhost:4000//users/upload
 * accept-encoding: gzip, deflate, br
 * accept-language: en-US,en;q=0.9
 * cookie: _ga=GA1.1.466669199.1595931146; _gid=GA1.1.1555964937.1595931146; _gat=1
 */

module.exports = function (req, res) {
  res.statusCode = 404;

  res.setHeader("date", "Tue, 28 Jul 2020 10:12:28 GMT");
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("set-cookie", ["__cfduid=dd7d42a3733b80a936f9b3bf32c5ad30d1595931148; expires=Thu, 27-Aug-20 10:12:28 GMT; path=/; domain=.reqres.in; HttpOnly; SameSite=Lax; Secure"]);
  res.setHeader("x-powered-by", "Express");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("via", "1.1 vegur");
  res.setHeader("cache-control", "max-age=14400");
  res.setHeader("cf-cache-status", "EXPIRED");
  res.setHeader("cf-request-id", "043681d89e0000d3f723a7b200000001");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "5b9dd26dcb66d3f7-KHI");
  res.setHeader("content-encoding", "br");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("E9UPAMRiqfb35zXHNfsCyK3JqUqr1xqJVjIOAgdIaZtjGIJQesJBkqZDgLQdIJ0nRWCBpJmcnJQz9o37x1DtfdvUoIC8PpfhOAHpsxrVgEiDU0aWzWrAB0NSgCXQ7zs7zpWG8FmV+CdGY31/pDJq3BK6LgTev/7iPUfOETgMh27g+dwPuP9l/iD9VQmpkU1MavsMVsZK4rIlG6P9aRxYx49Lly0Cw2dmGBww9VgFUiCOH6NJ4lPkAYudGi5BHTfUQ6PUU7lBCoM3KdhngX7rUD2SZ1gF+2BShhUYjMFYKxYuZC+TeWoYnVo2j3Gpm0AMSIoKoir5iz2McAPxhDrC0VhBbpZTSMY21RccBTkyXhu9uY4jd1dqbx7HIHsTOD4vcbCdz0fiYKPfbh9sMygLpgmXsUtsP7N5t8BP/yTAJ/hmym5jIYYMSQHVPJJYVjUJLEeMOJCesqFMJqTdN4NDaEhJNKYt2eRaRBwI2PDqBO0GSG2unb1/Yh1zFyLlOM8uPov10z1I38JHDC1dG5bO5n+iaDes769/h8hNEpYkjQp+RDmnG08BAooTEnDD1Gh7XYWygb2SSj1c5VZaqNoQvVomQD8y5vnhaXVPwVWUdGVbNi2FkVUqK22tFFPE7kwyfqJ+ezFuCoDPU8slRCIJ6990YGwZhcQmub4bNhWKFJAXbEhkpIuf5nHJqkppq7TVIXLJdtKPjIwuApASWzdWvdzcWjY7pxtzV9FsTV5+LzqnMMzHvHlrnTFNatLNQ7SyyKdBA7mqC+KcRCBjWioxdrUyrJ0fVWmYyz9TiJ0BFf5BQTb/nuxY1XMaDdZP90wYr60Eybumx9ZMDHVammRrraNQ5p0w8LaC0PrWndm2uiZoETTMjmJTLNMjl88eO1TOEyLl2g==", "base64"));
  res.write(new Buffer("3QaYewQVByX8U+0sxz19vCOULmKePs9xR55yWcvkydaYg05rRqLGqkOhUCgx34uJwpimspk3aKGUA9KfIV7sOSNJ9GNDxxslCsr/ATgWTgH1BwYVCxvfJ0jsZJ85PrHZwHH65bNvcq6t7DD7nMHUns1fIfA/5nIi621bN/fqMQhnKdrY7iYDeFOlU6pmDhN6znLs1Hh4c/nQVi5V3AHG1AUU3VlgxH/Ewd7GQFjyF3csnKWuXW9hhkvdmKDGxEoZiNo1k2RiaIyDRk9TPlSwIGNDHMu1FVfaXxmSWDsBHDuy8PFwwDCsO5FFeojJR68t446lJYmh7KP8pbMqDyaTUsDzosG1nkg3s8FW/6CTffCige9pqTfq6dr6+Un/YEz2741vU9camTpN0KcUmWkQCozheqVtV9+82+xOREGaBj1MK5M1ndtRCFe0L4b5ky65Y7Kk7EjlFJiqXr+efJirWg7wDgRcPhKfzSv4tl8cJ8kl2bm7zw1JXbHZBlnsJoGVlRTSEmGgOCHZMleHzU/2p6NWeYsgNXxdYZSn+xTqu8/KChViOHdC0pJN2UlDP8jBRK6e+kz8wsEZXlHGRgRCcfoQ4KLL5WmeQ3FU4VC+/sV8afH1BBT4xbIgaZx390+u61/+D1KCY+L8l5etrteoJBEAGuQNUvyBgVd8I9bSUaMMnyBuMIIfAhJo1rfwKRyTk52prpAihFBtXaPBUa9y3YFYkJOQ7O9Ym9DKoJBpXHmZXhX9IJHlUk+mwiCdpsMhfdVhkVga4VmSeG7GW6QsWITJMkvlScNTUPRXeanqjDoQZj3+ZV30esPhcDgYiFYifitBEms4TABPPUBu6VKVFCE5wzFb0B9bAw==", "base64"));
  res.end();

  return __filename;
};
