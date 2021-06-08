var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var filter_pair = function (element, index, array) {
    return (element % 2 === 0);
};
console.log(array.filter(filter_pair));
