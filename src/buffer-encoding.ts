
const buff: Buffer = Buffer.from("Joy Land", "utf8");

console.info(buff.toString());
console.info(buff.toString("hex"));
console.info(buff.toString("base64"));

const buffBase64 = Buffer.from("Sm95IExhbmRlcg==", "base64");
console.info(buffBase64.toString("utf8"));
