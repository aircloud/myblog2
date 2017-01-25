'use strict';

var _index = require('../api/index.api');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _configStore = require('../common/store/configStore');

var _configStore2 = _interopRequireDefault(_configStore);

var _App = require('../common/containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

// import { fetchCounter } from '../common/api/counter'

var ALLARTICLE = {
    "data": [{ "year": "2017", "article": [{ "title": "JS的静态作用域、子程序引用环境与参数传递类型", "tag": ["javascript"], "year": "2017", "month": "1", "time": "1/11/2017, 1:33:26 AM", "ID": 43 }] }]
};

function handleRender(req, res) {
    // Query our mock API asynchronously
    (0, _index.getarticlelist)(function (apiResult) {
        // Read the counter from the request, if provided
        var params = qs.parse(req.query);
        var result = apiResult || ALLARTICLE;

        // Compile an initial state
        var initialState = { result: result };

        // Create a new Redux store instance
        var store = (0, _configStore2.default)(initialState);

        // Render the component to a string
        var html = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_App2.default, null)
        ));

        // Grab the initial state from our Redux store
        var finalState = store.getState();

        // Send the rendered page back to the client
        res.send(renderFullPage(html, finalState));
    });
}

function renderFullPage(html, initialState) {
    return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>myblog</title>\n      </head>\n      <body>\n        <div id="app">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n        </script>\n        <script src="/static/bundle.js"></script>\n      </body>\n    </html>\n    ';
}

/* GET home page. */
router.get('/', function (req, res, next) {

    handleRender(req, res);
});

module.exports = router;
