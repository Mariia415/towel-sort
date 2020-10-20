
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = matrix;
  let myMatrix = [];
if (matrix) {
  for (let i = 0; i < newMatrix.length; i++){
    for (let a = 0; a < newMatrix[i].length; a++) {
      if (i === 0 || i % 2 === 0) {
        myMatrix.push(newMatrix[i][a]);
      } else {
        myMatrix.push(newMatrix[i][newMatrix[i].length - 1 - a]);
      };
    };
 };
  return myMatrix;
} else {
  return myMatrix;
 }
};
