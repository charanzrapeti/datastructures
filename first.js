// const array = ["one", "two", "three", "four", "five"];
// if(array.indexOf("one")) {
//     console.log('yes it is working')
// }
// else {
//     console.log('no it isnt working')
// }

// binary search
const binarysearch = (arrays, element) => {
    var left = 0;
    var right = arrays.length;
    var middle = Math.floor((left+right)/2);
    // console.log(middle)
    while (left != right-1) {
        if (element > arrays[middle]) {
            left = middle;
            middle = Math.floor((left+right)/2);
            // console.log(element + ' is greater than the ' + arrays[middle])
        }
        else if(element < arrays[middle]) {
            right =  middle;
            middle = Math.floor((left+right)/2);
            // console.log(element + ' is lesser than the ' + arrays[middle])
            // console.log(left + " and " + right)
        }
        else if(element = arrays[middle]) {
            return middle
        }
    }

}
console.log(binarysearch([12,16,18,21,23,32,34,37,41,45,47,91,102,108,110],12))