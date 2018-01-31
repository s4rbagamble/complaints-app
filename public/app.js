import angular from 'angular';
import appRoutes from './appRoutes';
import ComplaintsCtrl from './controllers/ComplaintsController';

angular.module('routerApp', [require('angular-route'), 'appRoutes', 'ComplaintsCtrl']);

angular.bootstrap(document, ['routerApp']);


