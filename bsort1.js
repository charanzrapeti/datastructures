const bubble = (arr) => {
  var count = 1;
  while (count == 1) {
    var swap = 0;
    for (i = 0, j = 1; i < arr.length - 1, j < arr.length; i++, j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;

        swap++;
      }
    }
    if (swap == 0) {
      count = 0;
    }
  }
  return arr;
};
var array = [21, 12, 12, 12, 23, 213, 54, 54, 75, 34, 646, 65];
var result = bubble(array);
console.log(result);
