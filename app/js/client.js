'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./mmm/controllers/mmm_controller.js')(mmmApp);
