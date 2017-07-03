/**
 * @desc:
 * @author: Filipe Mota de Sá - filipemotasa@hotnail.com
 * @todo:
 */

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('sapo', ['ionic',
  'sapo.controllers',
  'sapo.controllers',
  'sapo.filters',
  'sapo.components'])
var controllers = angular.module('sapo.controllers', []);
var services = angular.module('sapo.services', []);
var filters = angular.module('sapo.filters', []);
var components = angular.module('sapo.components', []);
