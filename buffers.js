// const buffer = Buffer.alloc(10);
// const buffer2 = Buffer.alloc(10);
// // console.log(buffer);
// const data = buffer.write("Desire");
// const data2 = buffer2.write("Infotech");
// const fullName = [buffer, buffer2];
// const emptyBufferFillWithD = Buffer.alloc(15).fill("DEEP");
// const copyBuffer = Buffer.from("Desire Infotech Gandhinagar best");
// console.log(copyBuffer.swap64().toJSON());
// // console.log(Buffer.concat(fullName).toString());

// const fs = require("fs");
// const { pipeline } = require("stream");
// var zlib = require("zlib");
// const file = fs.createReadStream("stream.txt", {
//   flags: "r",
// });
// const writer = fs.createWriteStream("streamnew.txt", {
//   flags: "w",
// });
// file.on("data", (data) => {
//   writer.write(
//     data.toString() + "Desire infotech gandhinagar updated from node js"
//   );
// });

// pipeline(
//   fs.createReadStream("stream1.txt", {
//     flags: "r",
//   }),
//   fs.createWriteStream("streamnew.txt", {
//     flags: "w",
//   }),
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

// fs.createReadStream("stream.txt", {
//   flags: "r",
// })
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("streamzip.txt.gz"));
