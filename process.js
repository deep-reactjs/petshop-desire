// // process events
// process.on("beforeExit", (code) => {
//   console.log("Process to ber perform brfore exit", code);
// });

// process.on("exit", (code) => {
//   console.log("Process exit", code);
// });
// process.on("multipleResolves", (type, promise, reason) => {
//   console.log({ type, promise, reason });
// });
// function resolve() {
//   try {
//     return new Promise((resolve, reject) => {
//       resolve("first resolve");
//       resolve("second resolve");
//       reject(new Error("something went wrong"));
//     });
//   } catch (error) {
//     throw new Error("error");
//   }
// }
// resolve();
// console.log(process.platform);
// process.stdout.write("Hello World!" + "\n");
// process.stderr.write("hello");
// console.log(process.execPath);
// console.log("program execution started");
// console.log(process.arch);
// console.log(process.argv);
// console.log(process.env);
// console.log(process.cpuUsage());
// console.log(process.release);
// console.log(process.version);
// console.log(process.versions);
// console.log(process.pid);
// process.exit(0);
// console.log(process.cwd());
// console.log(process.hrtime());
// console.log(process.memoryUsage());
// console.log(process.uptime());

// const { spawn } = require("child_process");
// const child = spawn("ipconfig", { shell: true });
// child.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on("data", (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// Executes the exec.js file
// const { execFile, fork, spawn } = require("child_process");
// const child = execFile("node", ["-v"], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

// spawn("node", ["callback.js"], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`error: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }

//   console.log(`stdout:\n${stdout}`);
// });
// const child = spawn("dir");
// var child = fork(__dirname + "/sub.js");

// child.on("message", function (m) {
//   console.log("Parent process received:", m);
// });

// child.send({ hello: "from parent process" });

// child.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// execFile("node", ["events.js"], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: No. of directories = ${stdout}`);
//   if (stderr != "") console.error(`stderr: ${stderr}`);
// });

// ... existing code ...

// Listen for the SIGINT signal (e.g., Ctrl+C in the terminal)
process.on("SIGINT", () => {
  console.log("Received SIGINT. Gracefully shutting down...");
  process.exit(0);
});

// Listen for the SIGTERM signal (e.g., kill command)
process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Gracefully shutting down...");
  process.exit(0);
});

// Listen for SIGUSR1 signal (custom signal)
process.on("SIGUSR1", () => {
  console.log("Received SIGUSR1. Performing custom action...");
  // Do something specific when this signal is received
});

// Listen for SIGUSR2 signal (another custom signal)
process.on("SIGUSR2", () => {
  console.log("Received SIGUSR2. Reloading configuration...");
  // Reload configuration or perform other tasks
});

// Simulate a long-running process
console.log("Application is running. Process ID:", process.pid);
console.log("To send signals to this process, use these commands:");
console.log(`- Kill with SIGTERM: kill ${process.pid}`);
console.log(`- Send SIGUSR1: kill -SIGUSR1 ${process.pid}`);
console.log(`- Send SIGUSR2: kill -SIGUSR2 ${process.pid}`);
console.log("Press Ctrl+C to exit (SIGINT).");

// Keep the process running
setInterval(() => {
  // This keeps the process alive
}, 1000);
