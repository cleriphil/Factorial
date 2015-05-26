var factorial = function(integer1) {
  if (integer1 === 0 || integer1 === 1) {
    return 1
  } else {
    // var total = 1
    // for(var index = 1; index <= integer1; index += 1) {
    //   total *= index;
    // };
    // return total;
    return integer1 * factorial(integer1 - 1)
  };
};
