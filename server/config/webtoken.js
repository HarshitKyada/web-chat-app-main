const jsonwebtoken = require("jsonwebtoken");

const generateJWToken = (id) => {
  return jsonwebtoken.sign({ id }, "3a25866a362a0e2e2714a425e572957339caf9be677e0fd96f5dfef751176251", {
    expiresIn: "10d",
  });
};

module.exports = generateJWToken;
