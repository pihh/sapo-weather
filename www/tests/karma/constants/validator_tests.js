describe('VALIDATOR', function() {

  var validator;
  var tests = [
    {
      'what': 'number',
      'success': '1',
      'fail': 'x'
    },{
      'what': 'float',
      'success': 1.2,
      'fail': 'x'
    },{
      'what': 'string',
      'success': '1',
      'fail': 12345
    },{
      'what': 'nsew',
      'success': 'N',
      'fail': 'x'
    },{
      'what': 'array',
      'success': [],
      'fail': {}
    },{
      'what': 'json',
      'success': { "json": "json" },
      'fail': { 'json': 'json' }
    }
  ];

  beforeEach(angular.mock.module('sapo'));
  beforeEach( inject(function(VALIDATOR) {
    validator = VALIDATOR;
  }));

  it('should have a VALIDATOR constant', function() {
    expect(validator).toBeDefined();
  });


  for (var index in tests) {
    var obj = tests[index];
    it('Should return true if is ' + obj.what, function() {
      expect(function() { validator(obj.success, obj.what); }).toBeTruthy();
    });
    it('Should return false if not ' + obj.what, function() {
      expect(validator(obj.fail, obj.what)).toBeFalsy();
    });
  }

});
