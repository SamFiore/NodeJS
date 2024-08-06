const { readFile } = require("fs/promises");
// const { promisify } = require("util");

// const readFilePromise = promisify(readFile)

// function getFile(pathfile) {
//   return new Promise((resolve, reject) => {
//     readFile(pathfile, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// }

// getFile('./data/fourth.txt')
//     .then((result) => console.log(result))
//     .then(() => getFile('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))

async function read() {
  try {
    const result = await readFile("./data/first.txt", 'utf-8');
    console.log(result);
    const result2 = await readFile("./data/second.txt", 'utf-8');
    console.log(result2);
    throw new Error("Esto es un error inesperado.");
    const result3 = await getFile("./data/third.txt");
    const result4 = await getFile("./data/fourth.txt");
    console.log(result3);
    console.log(result4);
  } catch (err) {
    console.log(err);
  }
}

read();
