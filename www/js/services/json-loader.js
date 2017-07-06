"use strict";
/**
 * @desc: Http loader to get JSON files from MEO and cache them. Used service because I want it to be a singleton
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.service('jsonLoader',function($http,$q, VALIDATOR) {
  var path = 'data/',
    preffix = '.json',
    validate = VALIDATOR,
    loadJsonFile = function(fileName) {
      return $http.get(path + fileName + preffix);
    };
  return {
    '$isJSON': function(json) {
      return validate(json, 'json');
    },
    '$loadJsonFile': loadJsonFile,
    '$loadJsonFilesList': function(data) {
      // check if is a array
      if (!validate(data,'array')) {
        throw 'load JSON Files list needs an array';
      }

      var promises = [];
      data.forEach(function(d) {
        promises.push(loadJsonFile(d));
      });

      return $q.all(promises);
    }
  };
});
