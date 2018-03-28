// TODO implement chooseRandom function and export it
export const chooseRandom = (array = [], numItems) => {
  // check length
  if (numItems > 0) {
    if (array.length > 1) {
      if (numItems > array.length) {
        numItems = Math.floor(Math.random() * array.length)
      }
      const randomIndices = Array(numItems).fill().reduce((res, next) => {
        next = array[Math.floor(Math.random() * array.length)]
        if (!res.includes(next)) {
          res.push(next)
        }
        return res
      }, [])

      const checkArray = array.filter(function (index) {
        if (array.includes(index) === randomIndices.includes(index)) {
          return randomIndices.includes(index)
        }
      })
      console.log(checkArray)
      return checkArray
    } else {
      return array
    }
  } else {
    return array
  }
}
