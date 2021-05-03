const path = require("path");
require("dotenv").config();
module.exports = {
  target: "serverless",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
