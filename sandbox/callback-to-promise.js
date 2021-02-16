// here is a callback
const fs = require("fs");

// const textMessage = fs.readFile("./message.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// This is the callback converted into using a Promise
const textMessage = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

textMessage("./message.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
