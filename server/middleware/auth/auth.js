const jwt = require("jsonwebtoken");
const UserModel = require("../../models/User");
const asyncHandler = require("express-async-handler");
const { CustomError } = require("../../error/custom");

const authorizer = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(
        token,
        "3a25866a362a0e2e2714a425e572957339caf9be677e0fd96f5dfef751176251"
      );

      req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      throw new CustomError("Authorization failed!", 401);
    }
  }

  if (!token) {
    throw new CustomError("No token specified to authorize!", 401);
  }
});

module.exports = { authorizer };
