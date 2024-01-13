// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
let allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:1234";
import { createServer } from "cors-anywhere";

createServer({
  originWhitelist: [allowedOrigin], // Allow all origins
}).listen(port, host, function () {
  console.log("Running CORS Anywhere on " + host + ":" + port);
});
