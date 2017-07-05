/**
 * @desc: Aplication constants
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

app.constant('MANIFEST',{
  'name': 'Sapo fase 2',
  'date': '03/07/2015',
  'description': 'Fase 2 da entrevista para vaga de javascript developer ',
  'author': {
    'name': 'Filipe Mota de Sá',
    'email': 'filipemotasa@hotmail.com',
    'github': 'http://github.com/pihh',
    'keywords': ['javascript','angularjs','ionic framework'],
    'company': 'KWAN'
  }
});

// Response model for promises or more complicated data
app.constant('STATUS', {
  'OK': 200,
  'UNAUTHORIZED': 401,
  'MODEL': {
    'status': 0,
    'data': {},
    'message': ''
  }
});

// North south east west and their translation
app.constant('NSEW', {
  'E': 'Este',
  'W': 'Oeste',
  'N': 'Norte',
  'S': 'Sul',
  'NE': 'Nordeste',
  'SE': 'Sudeste',
  'NW': 'Noroeste',
  'SW': 'Sudoeste'
});

// Usefull data to display on the beaches list
app.constant('DATA_MODEL',{
  'distFromMe': 'float',
  'lat': 'float',
  'lng': 'float',
  'tempAguaMar': 'float',
  'ondulacao': 'float',
  'dirOndulacao': 'NSEW',
  'ffVento': 'float',
  'ddvento': 'NSEW',
  'vaga': 'float'
});

// Função haversine
app.constant('HAVERSINE',(function() {

  var toRad = function(num) {
    return num.toRad();
  };
  // jumping options and callback for simplicity ( but on a real project I'd use them )
  return function HAVERSINE(start, end, options, callback) {
    // validate if valid lat long
    if (false === start instanceof Coordinate || false === end instanceof Coordinate) {
      throw 'Start and end location of the haversine formula must be of instance Coodinate';
    }

    var km = 6371;
    var defaultOptions = {
      'decimalPlaces': 5
    };

    var dLat = toRad(end.lat - start.lat);
    var dLng = toRad(end.lng - start.lng);
    var lat1 = start.lat.toRad();
    var lat2 = end.lat.toRad();

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var res = km * c;

    // update default options to match user added options
    if (options) {
      if (options.decimalPlaces && !isNaN(options.decimalPlaces)) {
        defaultOptions.decimalPlaces = options.decimalPlaces.toFixed(0);
      }
    }

    // Apply the options
    res = res.toFixed(defaultOptions.decimalPlaces);

    return parseFloat(res);
  };
}()));

app.constant('VALIDATOR', (function(NSEW) {
  var againstList = {
    'float': function(variable) {
      return !isNaN(parseFloat(variable));
    },
    'nsew': function(variable) {
      variable = variable.toUpperCase().trim();
      return NSEW.hasOwnProperty(variable);
    },
    'array': function(variable) {
      return (variable.constructor === Array);
    },
    'json': function(variable) {
      try {
        JSON.parse(variable);
      } catch (e) {
        return false;
      }
      return true;
    }
  };

  return function VALIDATOR(variable, against) {

    // trim and get to lower case so it matches the property
    against = against.toLowerCase().trim();

    if (!againstList.hasOwnProperty(against)) {
      throw 'The validator can\'t recognize that validation';
    }

    return againstList[against](variable);
  };
}()));
