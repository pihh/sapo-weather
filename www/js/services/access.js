/**
 * @desc: Access service will check if user has location services enabeled, if has can go to home
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

services.service('Access',function($q, STATUS) {

  var access = {
    "$hasLocationEnabled": function() {

    },
    "$getCoordinates": function() {

    }
  };

  return access;
});
