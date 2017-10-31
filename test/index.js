'use strict';

require('angular');
require('angular-mocks');
require('../src/angularjs')

var tests = require.context('.', true, /.*\.spec\.js$/);
tests.keys().forEach(tests);

var source = require.context('../src', true, /.*\.js$/);
source.keys().forEach(source);
