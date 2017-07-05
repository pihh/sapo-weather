app.filter('orderByProperty', function() {
  return function(input, attribute) {
    if (!angular.isObject(input)) {
      return input;
    }

    var array = [];
    for (var objectKey in input) {
      array.push(input[objectKey]);
    }

    array.sort(function(a, b) {
      a = parseFloat(a[attribute]);
      b = parseFloat(b[attribute]);
      return a - b;
    });
    return array;
  };
});
