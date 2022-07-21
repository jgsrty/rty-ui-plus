console.log();
console.log(import.meta);

export default {
  base: process.env.NODE_ENV === "production" ? "/rty-ui-plus/" : "",
};
