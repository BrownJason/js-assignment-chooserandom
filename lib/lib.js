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
      }
      const randomIndices = Array(numItems).fill().reduce((res, next) => {
        next = array[Math.floor(Math.random() * array.length)];
        // for (let i = 0; i < array.length; i++) {
        //   if (!res.includes(next)) {
        //     res.push(next)
        //   }
        // }
        res.push(next);
        return res;
      }, []);

      return randomIndices.filter(function (index) {
        if (array.includes(index) === randomIndices.includes(index)) {
          return randomIndices.includes(index);
        }
      });
    } else {
      return array;
    }
  } else {
    return array;
  }
};