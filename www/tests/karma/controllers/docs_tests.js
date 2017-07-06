/**
 * @desc: Docs controller testing - Não acabado porque estou enferrujado quanto
 *  a unit test e fiquei sem tempo.
 * @author: Filipe Mota de Sá - filipemotasa@hotmail.com
 */

 describe('DocsCtrl', function() {

   var scope, ctrl, httpBackend, stateparams, listingId;

   beforeEach(angular.mock.module("sapo"));

   beforeEach(angular.mock.inject(function($controller, $rootScope, _$httpBackend_) {
     httpBackend = _$httpBackend_;

     // you should be expecting the get request url from the controller, not the route
     httpBackend.expectGET('data/docs.json').respond([{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }, { 'id': 5 }, { 'id': 6 }]);
     scope = $rootScope.$new();
     ctrl = $controller;
   }));

   it('Should load all documents view', function() {

     // pass your mock stateparams object to the controller
     ctrl = ctrl("DocsCtrl", { '$scope': scope });
   });

   it('Should load single document view', function() {
    //  stateparams = { 'id': 1 }; // mock your stateparams object with your id
    //  ctrl = ctrl("DocsCtrl", { '$scope': scope , '$stateparams': stateParams } );
   });

   it('Should load single document view with name Controlo de qualidade', function() {
     var name = "Controlo de qualidade";
   });
 });
