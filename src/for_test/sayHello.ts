export const sayHello = (name: string) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    throw new Error("Name is required");
  }
};
