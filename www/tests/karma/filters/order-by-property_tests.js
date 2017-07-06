describe('OrderByPropertyFilter', function() {

  var res,
    $filter,
    array = [
      {
        'name': 'a',
        'pos': 3
      },{
        'name': 'c',
        'pos': 2,
      },{
        'name': 'b',
        'pos': 1
      }
    ];

  beforeEach(function() {
    module('sapo');
    inject(function(_$filter_) {
      $filter = _$filter_;
    });
  });

  it('Should order the array by its name property, should fail returning a,b,c ', function() {
    expect($filter('orderByProperty')(array,'name')).not.toEqual(array);
  });

  it('Should order the array by its name property, should return a,b,c ', function() {
    expect($filter('orderByProperty')(array,'name')).toEqual([
      {
        'name': 'a',
        'pos': 3
      }, {
        'name': 'b',
        'pos': 1
      }, {
        'name': 'c',
        'pos': 2
      }
    ]);
  });

  it('Should order the array by its pos property, should return 1,2,3 ', function() {
    expect($filter('orderByProperty')(array,'pos')).toEqual([
      {
        'name': 'b',
        'pos': 1
      }, {
        'name': 'c',
        'pos': 2
      }, {
        'name': 'a',
        'pos': 3
      }
    ]);
  });

  // Dev notes: Removed this block of code because I'm unsure if I want to throw exception
  //  or do nothing. Opted for doing nothing
  /*
  it('Should throw if trying to order by undefined property', function() {
    expect(function() {
      $filter('orderByProperty')(array,'xxx');
    }).toThrow();
  });
  */
});
