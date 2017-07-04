/**
 * @desc: Http loader to get JSON files from MEO and cache them. Used service because I want it to be a singleton
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.service('http',function($http,$q) {
  var path = 'data/',
    preffix = '.json';

  return {
    '$isJSON': function(json) {
      try {
        JSON.parse(json);
      } catch (e) {
        return false;
      }
      return true;
    },
    '$loadJsonFile': function(fileName) {
      return $http.get(path + fileName + preffix);
    },'$loadJsonFilesList': function(files) {
      // todo validate if is a array of files with nmes
      // run a chain promise
    }
  };
});
