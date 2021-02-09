// const message = "hello";
// const sum = 1 + 1;
// console.log(message);
// console.log(sum);

// const commandLineArgs = process.argv;
// console.log(commandLineArgs);
// console.log(process);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);
//
// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };
//
// printProfileData(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log("================");

  // Is the same as this...
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);
