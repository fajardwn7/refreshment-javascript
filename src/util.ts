import util from "util";

const firstName = "Joy";
const lastName = "Landder";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Joy",
    lastName: "Landder"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
