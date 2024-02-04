function getAverage(array) {
  const length = array.length;
  const sum = array.reduce((prev, cur) => prev + cur, 0);

  return sum / length;
}

function getMin(array) {
  return Math.min(...array);
}

function getMax(array) {
  return Math.max(...array);
}

function getLength(array) {
  return array.length;
}

function analyzeArray(array) {
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  const length = getLength(array);

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
