process.on("message", (msg) => {
  console.log("PARENT GOT MESSAGE:", msg);
});
process.send({ hello: "From child process" });
