// const { writeFile } = require("fs/promises");

// const createBigFile = async () => {
//     await writeFile('./data/bigFile.txt','Hola mundo'.repeat(1000000))
// }

// createBigFile()

const { error } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigFile.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Ya termine de leer");
});

stream.on("error", (err) => {
  console.log(err);
});
