const app = require("./src/app");
const connectDB = require("./src/db/db");
require('dotenv').config()

// Connect to MongoDB
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
