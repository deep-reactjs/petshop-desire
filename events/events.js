const events = require("events");
const EventEmitter = new events.EventEmitter();
const express = require("express");
const app = express();
// const prafulsEngagement = () => {
//   console.log("Prafuls's Engagement");
//   EventEmitter.emit("marriage");
// };
// const prafulsWedding = () => {
//   console.log("Praful's wedding");
// };
// EventEmitter.on("marriage", prafulsWedding);
// EventEmitter.on("engagement", prafulsEngagement);

// EventEmitter.emit("engagement");
// EventEmitter.setMaxListeners(1);
const sender = (sender, receiver) => {
  console.log(`${sender} sends message`);
  EventEmitter.emit("receivemessage", receiver);
  //   EventEmitter.emit("receivemessage", receiver); // example of event.once
};
const receive = (receiver) => {
  console.log(`${receiver} recieves message`);
};
const notify = () => {
  console.log("notification send");
};
const removeListner = (send, receive) => {
  console.log(`${send} blocks ${receive}`);
  EventEmitter.removeListener("sendmessage", sender);
  EventEmitter.emit("sendmessage", send, receive);
};

EventEmitter.addListener("sendmessage", sender);
EventEmitter.addListener("sendmessage", notify);
EventEmitter.on("receivemessage", receive);
// EventEmitter.once("receivemessage", receive); // to avoid multiple times call
EventEmitter.on("block", removeListner);
app.get("/message", (req, res) => {
  const params = req.query;
  console.log(params);
  EventEmitter.emit("sendmessage", params.sender, params.receiver);
  res.send("Done");
});

app.get("/block", (req, res) => {
  const params = req.query;
  console.log(params);
  EventEmitter.emit("block", params.sender, params.receiver);
  res.send("Done");
});
// console.log(EventEmitter.listenerCount("sendmessage"));
// EventEmitter.removeAllListeners("sendmessage");
// console.log(EventEmitter.listenerCount("sendmessage"));

console.log(EventEmitter.listeners("sendmessage"));
app.listen(3000, () => console.log("Server running successfully"));
