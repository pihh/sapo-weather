/**
 * @desc: Declaration file for all modules and respective dependencies
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

// Ionic Starter App
var app = angular.module('sapo', ['ionic',
  'ngCordova',
  'sapo.controllers',
  'sapo.services',
  'sapo.filters',
  'sapo.components']);
var controllers = angular.module('sapo.controllers', []);
var services = angular.module('sapo.services', []);
var filters = angular.module('sapo.filters', []);
var components = angular.module('sapo.components', []);
