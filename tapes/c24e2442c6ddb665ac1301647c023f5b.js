var path = require("path");

/**
 * GET /js/app.js
 *
 * host: reqres.in
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.44
 * accept: * / *
 * sec-fetch-site: same-origin
 * sec-fetch-mode: no-cors
 * sec-fetch-dest: script
 * referer: http://localhost:4000//users/upload
 * accept-encoding: gzip, deflate, br
 * accept-language: en-US,en;q=0.9
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 10:12:27 GMT");
  res.setHeader("content-type", "application/javascript");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("set-cookie", ["__cfduid=da3a551777c85ba8fd04662bd0970ad7b1595931146; expires=Thu, 27-Aug-20 10:12:26 GMT; path=/; domain=.reqres.in; HttpOnly; SameSite=Lax; Secure"]);
  res.setHeader("x-powered-by", "Express");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("cache-control", "public, max-age=14400");
  res.setHeader("last-modified", "Tue, 17 Mar 2020 10:16:35 GMT");
  res.setHeader("etag", "W/\"1984-170e7feb7b8\"");
  res.setHeader("via", "1.1 vegur");
  res.setHeader("cf-cache-status", "MISS");
  res.setHeader("cf-request-id", "043681d2d60000d3ebaaa25200000001");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "5b9dd2648e22d3eb-KHI");
  res.setHeader("content-encoding", "br");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("0RjMACD/29S6czn9fDcpIOEpDdxmS2mI5AlLYNYaxEoiDhOzV2vl16sA2ajYSBGpGmaqdg+eEIZuHxBUECSiNAQqOjJK3ceo2ve/C0kSzb6MYIR6OokA0FipMImgwMWEwtOiFcAX0oeCDOPfcLSUKHtsQw/jlVUjzSOACfl6pPE6ojk/ORGAlEni6bCli4IIZ/84DzA442NC630vG719zg7c4KtzOmWAjQ7/xtfjJOCLUnATmtKIxAMz33aN0Uh/SlPStayzgdWQUyaT/GLNVWYmSkmBc00LN3EQyBCcdfLOZ5FR0GdQcbuIjeQA2HQUmD406E/IAD9Y15/0gN8H4F9bZYCtMowpIycmFmMIOrRE/TAf8LG1HTjtPw3AgZdDkeF42gJ8vJ7JJAaxJoSYFEoYrjCzUqvXg9ElARdc9dNHz/zdDFA/aH6yJhyc/s9pz9uu8MqHLcLySDu3NSeFUc3uxtH2W/Cj6vR4qNta84FdhrOkECh+L9CT4Csd532WbLofh+iMXsPNOpyNfNCdgs4tx5W/T568rSWCTq08jyL4dZrhm08qG8BN253beuwYOUV2xwJG72klU/lpCpGQn/zh+7Vf/5fBoKP8mMGZn2QI2nWwhVRUZJ9h/Kf21zr0NBOpSAvJPq7ZOxYvDzORLvbb/++vN1nC8/I2GVa1Zdq0H4rDnIDf1QBedp6nQrBuq3Jz7d7rQdnfT/8iubsWdyItKblcLoIX4tcyJqK6zinNCp24KHikKnGsVvbl1WvLQlx4GR+K8fj37J97VsZ7ss8E/+c9y6fnyeuJxnmx", "base64"));
  res.write(new Buffer("s4eubwL6OsOIFFdNAJ+AVjtf7ubLl/FmIlUviWUsbUMCOH+GzYK6qPnz3fw5EVupChJYHT2EaBdsNl8iIxChJHrTw2lT5CMN9tbozw1swcdCr5Zc3nrrCM4AC5DmqAW6U5/m4/utJGQ8eoWad2JnPW5XWHOtSlpnPzdepWw4r/3emL2+2pzBGY5WDs7gsyPb4sch9EPweN2poSw1kkwixDx2DKNSVqXV0HIRH6V0efSnVmlWBaLHfGmdaYgVOHyiaCMIqoAbZizrRIl9PgfDJBfamSiVIkCZStJEwCjPTN9/2e5gOGUcnUUITGrd15/B1ghj0i8XJa+t+1weT/wojSEKqr0qm6MjYWiBXspZ22BOHMFjplSCnOS3ClsgoESMjomrI/cFwY0apRI5UqdKE5s/BjCVfZsixNFOn+Ksx5IPrlRhyM/jdgG6CUZGMzB5tOCizHNoE8v5GK+OQBylHxpVR41Rak3RCpAcQCJhHmV2+k26RgdIDDkhsi23QyBVxwIZDlWphqK23pAyXIhUxm6wdJXtpPKYCfXIiJy6XPbklbaGe+ASuNluIw8K1JcrpOm53OmwP0oIlkwJvBpVCVAIQamZiiVidGonQj10sJzHk2sDj9EX+Ov7774KoTcBajWdqa1H4Ie3Njrzc/OOA38WGDzLoYXdFtY5tIxJfRbd4y4r2lK6+brnP7QWlInHkO9CUB5D+6ArIWOK5iwABW0NqdTOZMwMoxKj4GcXpibwhg8SD6pZyMzjItWKYiSK9gRGXkDxeo9dkI9ftc1pqCNKEFMAxpdCfExolbYes8hMQGuWJfCyg1c1z5gzichSGous3KyEZAMvhIAdp14szU7Aja17tJgUk/yF3deJrwsxB425nqThdxYHw5c8nhwfhFIkj/7yW4L9ve+1+1R6TWhSBFNmQCDDa/HTAF46wVEyjw267cAEcKwLRk5H4pWGFx0c89HAH9AFhQzcpCDD4HMUS7NZtZLKaCm00ErlPF+vTZg5ZcQz1lxzw9Zmuow+ZSpI7PKbfgzEQS9BJNgwcFjYgqRQJ6q7KC4VpRSA/4MKgyHnP0UUNJIQGT797a6ZpqY6mmqe1iIr2hiz7tp4iLE9G/Rxlk6ZkPnD3sKkUYgsmaQ/PeYuXzPHs67Ll2lRslBXs2EDFReVAX+nwvYhsymDkkHpMm0SwGXAoqSe2KxlQr4/sTvWENccZUFGcs6o7VOCRIghRnvBmr0rn15OVyGKu6EMFV8ssKS3SIS/zej+KipSH/51mNi/yqWXqK5sL1Qc6pUIdUuDvp6F/rwsYsHK1Aa6p2kTp8s2jCPtxh7OP4YuIRzzHgVbYVl6h+mEDkI3qDNCXWg2j0AOO896RPUOw1RjGzxpxTiwNTAyZq+IxpUNJnz1ylqjZbfWqIFkY6QDkGNig+L6nrHaTMHwVj5tD+MhhhXu/oHUyyEGnGYlydGGtBwUGUKC9ACTL27yT85+Ejqnj4HLWO+sAhKNnN7ZST3O2KW9s+ytvGhnyDR1ueRMT4jZc1akhwMMOF0lzCexoCDP2U4znxZInEgzDNt/i4kSmkc=", "base64"));
  res.end();

  return __filename;
};
