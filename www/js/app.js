/**
 * @desc: Custom functionality that might be usefull in the future
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

// Converts numbers to rads.
 Number.prototype.toRad = function(){
    return this * Math.PI/180;
 };

// Coordinates object
// Used and commented a snippet I have
var Coordinate = function(lat, lng){

    //Private vars
    var _coordinates = {},
        _initialized = false;

    // vvalidates if is a number
    var _isNumber = function(n){
      if(!isNaN(parseFloat(n)) && isFinite(n))
        return true;
      // throw an exception warning that this is not a coordinate
      throw n + ' is not a number exception. Caller: Coordinate._isNumber(). File: app.js';
    };

    // setter
    this.set = function(lat,lng){
      // initialize the object once
      if(_initialized){
        throw 'Coordinate already initialized';
      }
      // var _privateMethod = function(){};
      // this.publicMethod = function(){};
      if(_isNumber(lat) && _isNumber(lng)){
        _coordinates.lat = lat;
        _coordinates.lng = lng;
        _initialized = true;
      }
    };

    // getter
    this.get = function(){
      if(_coordinates)
        return _coordinates;

      // throw an exception warning that this is not a coordinate
      throw n + ' is not a number exception. Caller: Coordinate._isNumber(). File: app.js';
    };

    // construct if variables
    if(lat && lng){
      this.set(lat,lng);
    };

    // constructor
    return this;
};

var coord = new Coordinate(10 , 10);
console.log(typeof coord, coord instanceof Coordinate, coord.get());

/**
 * @desc: Application base files.
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
