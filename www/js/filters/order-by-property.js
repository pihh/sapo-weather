filters.filter('orderByProperty', function(VALIDATOR) {

  var validator = VALIDATOR;

  return function(input, attribute) {
    if (!angular.isObject(input)) {
      return input;
    }

    var array = [];
    for (var objectKey in input) {
      array.push(input[objectKey]);
    }

    array.sort(function(a, b) {
      a = a[attribute];
      b = b[attribute];

      // order by number
      if (validator.number(a)) {
        return a - b;
      }

      // order by string
      if (validator.string(a)) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
    });
    return array;
  };
});
