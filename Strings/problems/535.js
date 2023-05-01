/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const encodeMapping = new Map();
const decodeMapping = new Map();
const baseUrl = "http://tinyurl.com/";

var encode = function (longUrl) {
  let newUrl = baseUrl + String(encodeMapping.size);
  encodeMapping.set(longUrl, newUrl);
  decodeMapping.set(newUrl, longUrl);
  return encodeMapping.get(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return decodeMapping.get(shortUrl);
};

let encoded =encode("https://leetcode.com/problems/design-tinyurl")
console.log(encoded);

console.log(decode(encoded));

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

encodeMapping.set("blah", "fhhdhs");

console.log(encodeMapping.size);
