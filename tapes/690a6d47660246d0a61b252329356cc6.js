var path = require("path");

/**
 * GET /api/users?page=2
 *
 * host: reqres.in
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.44
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-origin
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:4000/
 * accept-encoding: gzip, deflate, br
 * accept-language: en-US,en;q=0.9
 * cookie: _ga=GA1.1.466669199.1595931146; _gid=GA1.1.1555964937.1595931146
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 10:13:35 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("set-cookie", ["__cfduid=d7b4a13b9e9ecaf532ce0fee5638c769d1595931215; expires=Thu, 27-Aug-20 10:13:35 GMT; path=/; domain=.reqres.in; HttpOnly; SameSite=Lax; Secure"]);
  res.setHeader("x-powered-by", "Express");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("etag", "W/\"4dd-IPv5LdOOb6s5S9E3i59wBCJ1k/0\"");
  res.setHeader("via", "1.1 vegur");
  res.setHeader("cache-control", "max-age=14400");
  res.setHeader("cf-cache-status", "REVALIDATED");
  res.setHeader("cf-request-id", "043682de050000d3eba6ad1200000001");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "5b9dd4100eacd3eb-KHI");
  res.setHeader("content-encoding", "br");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("seAmACD36vbTmndzKg5M32xSOdqjTS3EwK+2NTQokdY0NproIpo4GoTEe0IsMp/SZ5MkNar97p1iFtnHyr0Y3vmSvNrDEmuCWcxhSfov4blYUgazKL7FXDBYce3LXZh97UFUMCs49OqVGQyibJB6/wefyfFEk9JkfDECh6LEDsZkxYqAn9NPyYEHSQQchqBMJoK2IpP43Rnj2rS170SLhib4kofwmWAh+56s7bZXGkTxZHeK8MhrSpm8fy/GyuDWX5CunTcf0FXGupLtK22NGjGJJtlDmb6llXOBxl+4saNqwjOyMghyfb3br8SKuqVeaTeKQpebb7Uc/QHF0RhnyMogyvUVd9DOGEmVs5RotSapa/Kp0qmmHq6xVdG8lOwr8hj0IIUmosSrGsuGer+R6t3QwiO0ysCNYF/hj4bmpK3AfiBRYV3JHw4Y7YE5sIdPFq0z57Ii9kbU9XqRON2XK1gRRJQiKyPgsJ1LOoNTRtYDxk7AaGpWjDWTI6Mmi83f4qLDNZyx1JCfxFOitzFnDFaY0zYYi2XHlpWtiLE2PhyP", "base64"));
  res.end();

  return __filename;
};
