describe('Coordinate', function(){

  it('Should create objects with instanceof Coordinate', function(){
    var coordinate = new Coordinate(10,10);
    var instance = coordinate instanceof Coordinate;
     expect(instance).toBe(true);
  });
});
