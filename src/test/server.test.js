const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");

// Test if the server is running
test("Server is running on port 3000", async (t) => {
  try {
    // Try to connect to the server
    const response = await new Promise((resolve, reject) => {
      const req = http.get("http://localhost:3000", (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            data,
          });
        });
      });

      req.on("error", (error) => {
        reject(error);
      });

      req.end();
    });

    // Check if we got a response
    assert.ok(response.statusCode, "Server responded with a status code");
  } catch (error) {
    assert.fail(`Server is not running: ${error.message}`);
  }
});

// https://www.geeksforgeeks.org/node-js-assert-module/ user assert module
// https://www.geeksforgeeks.org/node-js-inspector/ node inspector
