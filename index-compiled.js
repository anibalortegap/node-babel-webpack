"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.send('Avengers!!').statusCode(200);
});
app.listen(3000, function () {
  console.log('connect successfully');
});
