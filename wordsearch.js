// // // PLANNING
// EXPECTATIONS:
// DETAIL: testing to keep working with minimal changes like the first bug fix took.

// ACTUALITIES: 
// DETAIL: saved partially working version and commented it.
// DETAIL: spent time learning how a suggested approach from google worked than used it to complete.

// NOTES:
// DETAIL: once the above suggested approach was in place everything just passed tests without any hiccup no matter what test we created.
// DETAIL: Learned the hard way make as few changes as possible as the original code was like 1 line from working!

// // COPY OF VERSION ABLE TO DO NORMAL ARRAYS CORRECTLY FOR REVISION.
// const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map(ls => ls.join(''))
//   for (element of horizontalJoin) {
//     if (element.includes(word)) {
//       return true;
//     }
//   }
//   return false;
// }

// /// ABLE TO DO NORMAL ARRAYS CORRECTLY.
// const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map(ls => ls.join(''))
//   for (element of horizontalJoin) {
//     if (element.includes(word)) {
//       return true;
//     }
//   }
//   return false;
// }
///// brief overview of map to avoid confusion.
// letters.map = const letters = {map(arr){
// for (let i = 0 i < arr; i++){
// whatever task was to be done in the function passed into map.
//}
//}}
///
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = letters.map((col, i) => letters.map(row => row[i]).join(''));
    if (!word) {
      return false;
    }
  
    for (const k of verticalJoin) {
      if (k.includes(word)) {
        return true;
      }
    }
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
  };
  
  
  
  module.exports = wordSearch
  
  // // // Potential approach as contains similar solution.
  // const transpose = function (matrix) {
  //   let newMatrix = [];
  //   // Replace this code with your solution
  //   // Pushing
  //   for (let i = 0; i < matrix[0].length; i++) {
  //     newMatrix.push([]);
  //   }
  //   for (let row = 0; row < matrix.length; row++) {
  //     for (let column = 0; column < matrix[row].length; column++) {
  //       newMatrix[column].push(matrix[row][column]);
  // 
  //     }
  //   }
  //   matrix = newMatrix;
  //   return matrix;
  // };
  
  /// Worked on by: 
  // Scott --Discord: (daemoonkid) // Arpi Patel --Discord: (arpi_23655)