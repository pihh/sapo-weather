describe('VALIDATOR', function() {

  var validator;
  var what;

  beforeEach(module('sapo'));
  beforeEach( inject(function(VALIDATOR) {
    validator = VALIDATOR;
  }));

  // Numbers
  what = 'number';
  it('Should return true if is ' + what, function() {
    expect(function() { validator("1",what); }).toBeTruthy();
  });
  it('Should return false if not is ' + what, function() {
    expect(function() { validator("x",what); }).toBeFalsy();
  });

  // Floats
  what = 'float';
  it('Should return true if is ' + what, function() {
    expect(function() { validator(1.2,what); }).toBeTruthy();
  });
  it('Should return false if not is ' + what, function() {
    expect(function() { validator("x",what); }).toBeFalsy();
  });

  // Strings
  what = 'string';
  it('Should return true if is ' + what, function() {
    expect(function() { validator('xxx',what); }).toBeTruthy();
  });
  it('Should return false if not is ' + what, function() {
    expect(function() { validator(2,what); }).toBeFalsy();
  });

  // North south east west constant
  what = 'nsew';
  it('Should return true if is ' + what, function() {
    expect(function() { validator('N',what); }).toBeTruthy();
  });
  it('Should return false if not is ' + what, function() {
    expect(function() { validator('X',what); }).toBeFalsy();
  });

  // Arrays
  what = 'array';
  it('Should return true if is ' + what, function() {
    expect(function() { validator([],what); }).toBeTruthy();
  });
  it('Should return false if not is ' + what, function() {
    expect(function() { validator({},what); }).toBeFalsy();
  });

  // Valid JSON
  what = 'json';
  it('Should return true if is ' + what, function() {
    expect(function() { validator( { "json": "json" } ,what); }).toBeTruthy();
  });
  it('Should return false if not is ' + what, function() {
    expect(function() { validator({json : "json" },what); }).toBeFalsy();
  });

});
