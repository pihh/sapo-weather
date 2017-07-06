"use strict";
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
  'sapo.components',
  'sapo.constants']);
var controllers = angular.module('sapo.controllers', []);
var services = angular.module('sapo.services', []);
var filters = angular.module('sapo.filters', []);
var components = angular.module('sapo.components', []);
var constants = angular.module('sapo.constants', []);
