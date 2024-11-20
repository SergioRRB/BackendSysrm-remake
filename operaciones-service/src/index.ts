import "dotenv/config";
import app from "./app";

// port
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});
