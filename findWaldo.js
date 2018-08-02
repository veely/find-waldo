// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var index = 0;
  arr.forEach(function(name) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
    index += 1;
  });
}

function actionWhenFound(index) {
  console.log("Found him at index %i!", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);