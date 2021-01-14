// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 500);

// setTimeout(() => {
  // process.stdout.write('\r\\    ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\    ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|    \n');
// }, 1700);

const charArr = ['\r|    ', '\r/    ', '\r-    ', '\r\\    '];
let time = 100;
const loopFunc = (givenArr, timeInc, timesToLoop) => {
  for (let j = 0; j < timesToLoop; j++) {
    for (let i = 0; i < givenArr.length; i++) {
      setTimeout(() => {
        process.stdout.write(givenArr[i]);
      }, timeInc);
      timeInc += 200;
    };
  };
  setTimeout(() => {
    process.stdout.write(givenArr[0] + '\n');
  }, timeInc);
};
loopFunc(charArr, time, 2);