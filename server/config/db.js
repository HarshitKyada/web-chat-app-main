const { connect } = require("mongoose");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
const connectDB = () => {
  return connect(
    "mongodb+srv://harshitkyada:bbOeKDAL2gsbKyeB@cluster0.ucocn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    options
  );
};

module.exports = connectDB;
