/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = [];

   
  for (var i = 0; i < n; i++) {
    var subArr = [];
    for (var j = 0; j < n; j++) {
      if (j - i === 0) {
        subArr.push(1);
      } else {
        subArr.push(0);
      }
    }
    solution.push(subArr);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];
  var allPossibleRows = []; //array of all the row configurations with one rook in it
  
  var array = [];
  for (var i = 0; i < n; i++) {
    array.push(0);
  } //produces an array holding 0s of length n

  for (var j = 0; j < n; j++) {
    var row = array.slice();
    row[j] = 1;
    allPossibleRows.push(row);
  } //builds all possible rows and stores in an array

  //define a recursive function findBoardSolutions that takes the argument of rowsLeft and an
  //empty array
  var findPossibleBoardSolutions = function(rowsLeft, result) {
    var board = new Board(result);
    if (board.hasAnyRooksConflicts.call(board)) {
      return;
    }
    if (rowsLeft === 0) {
      solutions.push(result);
      return;
    }
    allPossibleRows.forEach(function(row) {
      var x = [];
      x.push(row);
      findPossibleBoardSolutions(rowsLeft - 1, result.concat(x));
    });
  };
  findPossibleBoardSolutions(n, []);
  
  return solutions.length;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = [];
  var allPossibleRows = []; //array of all the row configurations with one queen in it
  
  var array = [];
  for (var i = 0; i < n; i++) {
    array.push(0);
  } //produces an array holding 0s of length n

  for (var j = 0; j < n; j++) {
    var row = array.slice();
    row[j] = 1;
    allPossibleRows.push(row);
  } //builds all possible rows and stores in an array
  
  var findPossibleBoardSolutions = function(rowsLeft, result) {
    var board = new Board(result);

    if (board.hasAnyQueensConflicts.call(board)) {
      return;
    }
    if (rowsLeft === 0) {
      solutions.push(result);
      return;
    } 
    allPossibleRows.forEach(function(row) {
      var x = [];
      x.push(row);
      findPossibleBoardSolutions(rowsLeft - 1, result.concat(x));
    });
  };

  if (n !== 2 && n !== 3) {
    findPossibleBoardSolutions(n, []);
  } else { 
    console.log(solutions);
  };
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));
  return solutions.length === 0 ? [] : solutions[0];

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = [];
  var allPossibleRows = []; //array of all the row configurations with one queen in it
  
  var array = [];
  for (var i = 0; i < n; i++) {
    array.push(0);
  } //produces an array holding 0s of length n

  for (var j = 0; j < n; j++) {
    var row = array.slice();
    row[j] = 1;
    allPossibleRows.push(row);
  } //builds all possible rows and stores in an array

  //define a recursive function findBoardSolutions that takes the argument of rowsLeft and an
  //empty array
  var findPossibleBoardSolutions = function(rowsLeft, result) {
    var board = new Board(result);
    if (board.hasAnyQueensConflicts.call(board)) {
      return;
    }
    if (rowsLeft === 0) {
      solutions.push(result);
      return;
    }
    allPossibleRows.forEach(function(row) {
      var x = [];
      x.push(row);
      findPossibleBoardSolutions(rowsLeft - 1, result.concat(x));
    });
  };
  findPossibleBoardSolutions(n, []);
  
  return solutions.length;

};
