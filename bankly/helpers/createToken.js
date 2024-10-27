const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

/** return signed JWT for payload {username, admin}. */

function createToken(username, admin = false) {
  let payload = { username, admin };
  try {
    return jwt.sign(payload, SECRET_KEY);
  } catch (error) {
    console.error("Error occured during token creation", error);
    throw new Error("Failed to create token");
  }
}

module.exports = createToken;
