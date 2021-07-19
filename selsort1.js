const selectionsort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    var min = arr[i];
    var count = 0;
    var index = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
        count = 1;
      }
    }
    if (count == 1) {
      var swap = arr[i];
      arr[i] = min;
      arr[index] = swap;
    }
  }
  return arr;
};
var array = [34, 342, 34, 3, 3234, 34, 334, 3, 423, 34, 32, 3, 34, 434, 34];
var result = selectionsort(array);
console.log(result);
