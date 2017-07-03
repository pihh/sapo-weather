describe('Coordinate', function() {
  var coordinate,joc;

  beforeEach(function() {
    coordinate = new window.Coordinate();
    joc = jasmine.objectContaining;
  });

  it('Should create objects with instanceof Coordinate', function() {
    var instance = coordinate instanceof window.Coordinate;
    expect(instance).toBe(true);
  });

  it('Should initialize the object if coordinates are passed', function() {
    coordinate.set(10,10);
    var get = coordinate.get();
    expect(get.lat).toBeDefined();
  });

  it('Should not set coordinates if object is initialized', function() {
    var c = new window.Coordinate(10,10);
    expect(function() {
      c.set(10,10);
    }).toThrow();
  });

  it('Should throw error if coordinates are not numbers', function() {
    expect(function() {
      coordinate.set("a",10);
    }).toThrow();
  });


  it('Should give the coordinates when get is called ', function() {
    coordinate.set(10,10.1);
    expect(coordinate.get()).toEqual(joc({
      'lat': 10
    }));
  });

});

// Number prototype
describe('Number', function() {
  it('Should return pi when 180 is converted to rads', function() {
    var num = 180;
    var pi = num.toRad();
    expect(pi).toEqual(Math.PI);
  });
});
