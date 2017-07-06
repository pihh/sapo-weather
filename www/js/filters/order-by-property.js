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

      // order by number if both numbers
      if (validator(a,'number') && validator(b,'number')) {
        return a - b;
      }

      // order by string if both strings
      if (validator(a, 'string') && validator(b,'string')) {
        a = a.toLowerCase();
        b = b.toLowerCase();

        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
      }

      // Keep as is
      return 0;
    });

    return array;
  };
});
