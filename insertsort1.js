const insertionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    var count = 0;
    for (j = i - 1; j >= 0; j--) {
        
      if(arr[i] < arr[j]){
        console.log(arr[i] +" is less than "+arr[j]+" with indices "+i+ " and "+ j);
         count++;
         console.log("count " + count + " for "+ arr[i])
      }
    }
    var temp = arr[i];
    
  }
  return arr;
};
const array = [3, 4, 2, 1, 5, 6];

var result = insertionSort(array);
console.log(result);
