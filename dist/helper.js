'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformSource = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.transformSource = transformSource;


function transformSource(path, callback) {
    (0, _nodeFetch2.default)(path).then(function (response) {
        return response.text();
    }).then(function (content) {
        return callback(null, content);
    }).catch(callback);
}