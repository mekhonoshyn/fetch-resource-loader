'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raw = exports.default = undefined;

var _loaderUtils = require('loader-utils');

var _loaderUtils2 = _interopRequireDefault(_loaderUtils);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_RAW = true;

exports.default = fetchResourceLoader;
exports.raw = IS_RAW;


function fetchResourceLoader() {
    this.cacheable();

    var callback = this.async();

    var _loaderUtils$parseQue = _loaderUtils2.default.parseQuery(this.resourceQuery),
        path = _loaderUtils$parseQue.path;

    (0, _helper.transformSource)(path, callback);
}