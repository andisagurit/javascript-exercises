const removeFromArray = function(...str) {
    const array = str[0];
    const newArray = [];

    array.forEach((item) => {
        if (!str.includes(item)) {
          newArray.push(item);
        }
      });
    return newArray;
};

// Do not edit below this line..
module.exports = removeFromArray;