"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO implement chooseRandom function and export it
const chooseRandom = exports.chooseRandom = (array = [], numItems) => {
  // check length
  if (numItems > 0) {
    if (array.length > 1) {
      if (numItems > array.length) {
        numItems = Math.floor(Math.random() * array.length);
        console.log(numItems);
      }
      const randomIndices = Array(numItems).fill().reduce((res, next) => {
        for (let i = 0; i < Array.length; i++) {
          next = array[Math.floor(Math.random() * array.length)];
          if (res.includes(next)) {
            i -= 1;
          } else {
            res.push(next);
          }
        }
        return res;
      }, []);

      // console.log(randomIndices)

      const checkArray = array.filter(function (index) {
        if (array.includes(index) === randomIndices.includes(index)) {
          return randomIndices.push(index);
        }
      });
      return checkArray;
    }
  } else {
    return array;
  }
};

console.log(chooseRandom([23, 3, 452, 42, 34, 2, 17, 13], 10));