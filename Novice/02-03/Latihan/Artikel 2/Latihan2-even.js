var filterArray = function(x, coll) {
    var resultArray = [];
  
    for (var i = 0; i < coll.length; i++) {
      if (coll[i] < x) {
        resultArray.push(coll[i]);
      }
    }
  
    return resultArray;
  }
  
  console.log(filterArray(3, [10, 9, 8, 2, 7, 5, 1, 3, 0])); // (3) [2, 1, 0]