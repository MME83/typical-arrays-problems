
exports.min = function min (array) {
  if (array != null && array.length > 0 ) {
      let minArray = 0;
      for (let i = 0; i < array.length; i++) {
          if (array[i] < minArray) {
              minArray = array[i]
          }
      }
      return minArray;
  }
  return 0;
}

exports.max = function max (array) {
    if (array != null && array.length > 0 ) {
        let maxArray = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxArray) {
                maxArray = array[i]
            }
        }
        return maxArray;
    }  
  return 0;
}

exports.avg = function avg (array) {
    if (array != null && array.length > 0 ) {
        let avgArray = 0;
        for (let i = 0; i < array.length; i++) {
            avgArray += array[i];  
        }
        return avgArray / array.length;
    }  
  return 0;
}
