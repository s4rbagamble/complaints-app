const chai = require('chai');
const expect = chai.expect;

describe('routing path', () => {

  describe('/', () => {
    it('should map routes to controllers', () => {

      var module = angular.module('routerApp', []);

      inject(($routeProvider) => {
        expect($routeProvider.routes['/'].controller).toBe('ComplaintsController');
        expect($routeProvider.routes['/'].templateUrl).toEqual('views/complaints.html');
      });
    });
  });
});

