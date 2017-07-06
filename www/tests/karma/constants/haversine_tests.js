describe('HAVERSINE', function() {

  beforeEach(module('sapo'));

  var myHome = new Coordinate(38.7050078,-9.3042206);
  var parentsHome = new Coordinate(38.754588,-9.1907547);
  var constant;

  beforeEach( inject(function(HAVERSINE) {
    constant = HAVERSINE;
  }));

  it('Should throw error if start or end is not a coordinate', function() {
    expect(function() {
      constant({ 'lat': 0 , 'lng': 0 },parentsHome);
    }).toThrow();
  });

  it('Should return 11.28130 when start is my home and end is my parents home', function() {
    expect(constant(myHome,parentsHome)).toEqual(11.28130);
  });

});
