import { URL } from "url";

const web = new URL("https://www.google.com/search?q=nodejs");

web.host = "www.joylandder.com";
web.searchParams.append("status", "premium");

console.info(web.toString());
console.info(web.href);
console.info(web.protocol);
console.info(web.host);
console.info(web.pathname);
console.info(web.searchParams);
