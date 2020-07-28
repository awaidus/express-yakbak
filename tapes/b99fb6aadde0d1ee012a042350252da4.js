var path = require("path");

/**
 * GET /css/app.css
 *
 * host: reqres.in
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.44
 * accept: text/css,* / *;q=0.1
 * sec-fetch-site: same-origin
 * sec-fetch-mode: no-cors
 * sec-fetch-dest: style
 * referer: http://localhost:4000/
 * accept-encoding: gzip, deflate, br
 * accept-language: en-US,en;q=0.9
 * cookie: _ga=GA1.1.466669199.1595931146; _gid=GA1.1.1555964937.1595931146
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 10:13:34 GMT");
  res.setHeader("content-type", "text/css; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("set-cookie", ["__cfduid=d2964422211c57f75e9543d3b624d054f1595931213; expires=Thu, 27-Aug-20 10:13:33 GMT; path=/; domain=.reqres.in; HttpOnly; SameSite=Lax; Secure"]);
  res.setHeader("x-powered-by", "Express");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("cache-control", "public, max-age=14400");
  res.setHeader("last-modified", "Tue, 17 Mar 2020 10:16:35 GMT");
  res.setHeader("etag", "W/\"4a69-170e7feb7b8\"");
  res.setHeader("via", "1.1 vegur");
  res.setHeader("cf-cache-status", "REVALIDATED");
  res.setHeader("cf-request-id", "043682d8400000d3f3e9091200000001");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "5b9dd406cac7d3f3-KHI");
  res.setHeader("content-encoding", "br");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("8UBTIqKa1AOgCBnm9vmlWnddTn+6vQssIFDzNjnJlNKRhRReMOhJOGXK1X59RiIIwzpCRoWFiTGpCNk0tfT3EPcCBD3dPbN77wBBBcgCy6soQCUjZKTauyCtw+k2uorDLbcxHHVtitiAhx9H+QM/M1zSwOMb8E0GnNKFvtlv6OFxQwypwUWbwbdZStpgauBdsOPsARglcxf3Ay1hhM2E3x8d4HeWOeDDSNbF/opJcWpQIcKkO2CrS4We24AapkvlexeCrXfh7InZXZbHJ70bQyK4/sqO0eLNg+sEL2MXUyS4b/25leWNCNrZGU8QKCJ6l6r79gaKqwMEGNgGwt+00DQ8dx+jh751AxOSM96Zxfag4o9350JqhQ+0llLV3YIVUsvZY1cB7VYX7Gyo3mUymQ5xsSraeujNsGPHwDMdbS1hEBMQJqKHNOBMLrf2dkDGlwSj9Cw6OEUDzGp2P45uNqPBpR10dzYcFZ+oqXYeaPh1jfkaUgrEDc+CBmKv7qdA6XzZl/16aoNTJ2VejWp71v6QbE/AEs59YDb0F25wzwLvmpDMQCiQp4OFyysLdpg9yR4lFNs0hgLQ9B5FJ7fG+zSwqJ9Gsr9NTWGV0T40Tykl97RzmqM+koCd2Su6WO8X/Av2z/rDScy3XXqRIRsBTvr4Dkq+Uuy2MngPFN85f5I+Uiv465Q4+WHzLb/GE+91G3d+K2+S/bCimt9ag8qP8C0q84yELNyW7GVKbTREgHu/mM0UkzfGpVIJFcvujAaQMoKpmB+JiylmTAh7EJzKWN7bjWEYEg==", "base64"));
  res.write(new Buffer("D3YGAVY1K1Dw7wKHqv5Mu1A1uasBhxy7Z7rEDR7Zc4H/S8PJ2NxfoZqPriRu1wmos+Zx7QDb8ENYOD0/T8ip+J0CDOlesq5yU2r2IMCJqTmnktWznstHjiIQsaRJok0yJ93eBZzOrD4zFmf56xgwj51Z1ZqgqAmE5CQXsgOl5CyGegEfxwjjKKp3Yd7dtFlg0KsWEQuZiFcruVG1d2PDMXdnFg2uxMyiJB3pyQ8BSrPPNC5QM8/xIlTZnzE4m2Se2scgbSVxMk2Gr/dv6IeeVcjzxTYh0Ft0seu8hVjQcD4LLgwuuLSP3Fe5TdUFeynSodCde2av2r+JBQ2wO53f4rogGe0lny7XXEVhUTcrQ2O/IfhZHJqosWMcFfa9V1Ft1vRPtT2J+d4t/VOHnuJcZRBuhqhwqFC3K9IMAOWED6DkyPlsAoc56Lt5AdWdP3VbuN1s6uelOBGrXB08BjUn2M2nASv80rfVFUqKyQG0pvIxLrBcexrAk3rO2tSRgoTbj/KwlcsbUFX4ql32G+fBE5jf5WxIK4sMzEzAMqiW/yMiUwjmbZ1VKTpHyVPKc1V+T6XXa0K3TSej96xKfYsUrbOr6hxdzRAl9HKuuSIm1Nujqah4b0d8DuX1BKe1GUrdX6XJni6tS7ybGsc1AWH7fXRw3pdfDBWaIi9jY6spUzMZnkvjECXJcFnpPlvVZ+fllEIx2C9Y89rnERgXS1avKOuwWtBmjTgSyXZm0+NmmWk+/UkMZhcJjpradzMLwfXHh53rzdaz7fUl+xjidHx0M4/Wp7l3e47VxBq+TQ115GFpkDeNimvsi9aw83X9mWtD4j1QO52G56XdkEbl1QAwNN9lrJ6vco9HvlnLLxkr+iHjSX6nv8lSuBqjFZgC19A5aJp+TWUVsnyVgjuvy11YbJoC2oDBb/wngEN+DOUWWM+uXJI9ZRAp+rXNsVsiw8P8Ls1ECsQ+TGpN8Ic0tnnfJn5u0k9TcD2zXL6fs44c7UxVdXnOrLSsVoV6QFWzVC1IwaGSNBeZBVLyrdLF63cvMtSajNvD2tE5UwiEAa1kNqZFDBpxPa/Ngx0N2OXGG+SCIONO08JlRohzAeTS+a1t6SbVmYw7OZHstr1ZziIcFkrxnHI6zba7/prCuFkkPPZCEfd2++zlBX90b4xt27ZPX705PXkz/ts+uXvz7VH7oG3boxe9eG5vvuH23vuXd9/df/m6kx95L+9efXyx3X68V7uPr7YPu3d3w8e3D/2Hdy/1buf9850+Tqsfvjy5+8Y+ndyHe9uxbccLAg+717V/xodg39aJv/v67NXhxf7oSGcnZEGG1K2FQnV50IipvsrZmxf51gNYPYztuVxkuD/hLFvC8HGc5cIt/dY+rrgrBG4zWN0uLKPsEilqIMYWSpHfzuQaRSjb8VJXmx4yQmlYy+JNheFQoAsfhOwrDmhjo+bsUfvY2waHKCx7wRgCdrOeQwkPX4Ll5uXJKWRAkak4S1R0i4fcfKdWgkm9xhyTSXaVS93b0dwVdiucexKCq6sV1jT9+9IZKWG4er7Ciqh/b0/mf7BQdYedy1rexRtrmBT96kCM7iExV1k5QAzTumTAQMuFYLI2v+yfC3qon7oLwxnetQG406w8gd77L3p3fhttDmMLFAlZzyAKrM0a8Fq7tGNgjSRfqMcPzxXIqJTPGaUsv/pTcoxPhzfH+BG3mHAtpFPMBKyqqHndX0FLXFgbJ3dwVuTdqDaSS9IV9PegZZsDebJ/TOvPu7S1/LkuYAk0Y4SbGxa4VGr1+7KSbUImlhIVaDAEvTw7z6luofStM9HORFdul9KXuA==", "base64"));
  res.write(new Buffer("lWCHIhROwi/b9GgWKrdM6HOiczWVl1YbbVAh3KoyVbW8jppQf2URqtlijHi5TSb1lVC9BuxWdi9R4xJ9qN6wqrKxwuisZZmcw8xu6MuyV92YhB2LvlUmUFtmNp87tV1o92EY1pVVaF4arQ2eXjoToDwd9ZqwkB+bqnEKbz2ABUP1oXjMpEunIEQ80OEC/cAmXtjQCVChs8PSzMMamJRmvflweprSxGjZ0B4bx084Zvbj595fegiZjOlDsGmlwRsMPPlArTB9epYJqqpyP5JLPL8ojGZ2WxsBr04bD60mrSdgq5MP0SmYM2t1T2tS0xOEjXjJxcwzi9DS3hAFxzxZnfS6VSnoWWif5SNBGLIjtB0T9gpB9AhJMsq8q1tkdD0ymgXGXpWFtMBcwTg5pKswaE47HyEZunVYZ4RSbclBHgTTcdk/uKwzPW8Q0eNvZ/RCMaEBXtXKuyySDyGrl0WMZQte1QS/8Ljq6x4ha/9yYPwcl8GyQu2sdNTQSkctrRLU1HJC6dDSSKXsA+qw7mVRRP+y0mV+GVP+1lcXqlFFgxR9qBs5bsFeU+jwqomrbe91CMdMkebSopkoFZHMXwT+puNDVMFDqS0XECoBREh8NuWatzLyT9P6wkquCc8CPZoeJrEgZg4E8AWGpC+XpsKXFZMKiNNKAPTeFMURxKyyFSuBCA8iAzBadPyAGAHgZ6iRl2AxhK9qM4yaKMgJg8odyq3LHFS4uJO0cLjSZV2GVL+hzpXcZKlk38uX0sXorQm34ICSU0urfBwIVJjNQzLvWzuzV8ldQQ9Kl9VqGfsvcqGEBm4680nGXF861OPkbtuTjPm0gB3ior0LvY8XDcySNlEkMi5oGmHBnr6pN5gcKIhqBhrrcxzAeK8bZLVRMjyHBmbbmu1Yi8VTaHtARWHsB0umGxc8vGEyS8bsjUr6V1KVrSnwuFlbL4rmYBUAkAjsEgolhxf6icEXlrgTV5EKYGv5DMSnv7+BDz2rSFB+D1lE7DscgJzx6zh5MdL3X34vFDduxhum2Ycai2//NLuN9EmT5ur/wqlNkxfoF9X8v2OO9Z2JSlKR7Bupzt3c/UIHby/heNMGxOjbtoRI0PKFJ/v071jMgmTUwQ02duMGgEt2w5Yl7tC7/i+69Zs5wgyjXKO7cGK1mdCv5PWacRK55Gb3/2iOPWyTz7FfIaUqvalNCwADZsvPh8nZ7jdKwdSimHxT65Z1sdsztkx/tqcmQrlKegNT6eUzoqgVciwkWj5id+isIF+TO5qLB109z5MRtKdcyrFArShjsfZOkMakMVnABPh93w/BqsUdCQFaD6Mu0HiwkFaMlHJJubNTFnTVkZSzeknCOBsBXiUuIIENltpRZvB+paRUxm2/Q5fieutuAYtv1MIqOPQIwXSw6UMKJF0w3ZVRMrn8/Gk9ZMl1AWZIKOw7L3gProoU5xCKccxqYgg1sFpZD2xDrEumxpxtQibuuWWMZxsLXNdtW2PfXjVps51WbM81PNbjy74nEA3meNBeLM0lIEO6GksGuVGGMWPRNuo4rxZqufo6bK8QsGBnx7itZNUpnta0GQwGymVcMelymOEKG4mWxp1pek75IocNN36d9s1Mv7THYW4O8uWfXV6NNtBXJiwEb7pDSAeCIxOSma33BNd3DxngqT2YHePbiXicDlcNCMghIgbq9/mCafFLJKpOfhRfOYS2ySaryvQ8l3g8UWnKYD4uz8adqsN1qJ7yOMHq025QJtSqVtwReLdH7D9WSRf6FWXlMcrXtBWg1qrA0F4rMfRpToB/gVyXjBUavBOp0/mZcMxVrl0hI9pl3/apEw==", "base64"));
  res.write(new Buffer("2RBbIQmdRHYrbj/eJMaS9ax5s+ONTSVCKQsK5WzPObaVnpuukeQI227CMjKmFHDXpP2xfXeVoZQKALWbRQeBSpo7WWMQtOcQ1Py6ZCImv9f8wNGhp0vS6ttcdwyeBTa66+cpUimQp6qFShEPrQD2JT47P9TblOxMV1Awv9viTE9OzcV+SMusC36wwe8M", "base64"));
  res.end();

  return __filename;
};
