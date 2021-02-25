'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015-present Zippy Technologies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DEFAULT_CLASS_NAME = 'zippy-react-load-mask__loader';
var LOADBAR_CLASSNAME = DEFAULT_CLASS_NAME + '-loadbar';

var notEmpty = function notEmpty(s) {
  return !!s;
};

var ZippyLoader = function (_React$Component) {
  _inherits(ZippyLoader, _React$Component);

  function ZippyLoader() {
    _classCallCheck(this, ZippyLoader);

    return _possibleConstructorReturn(this, (ZippyLoader.__proto__ || Object.getPrototypeOf(ZippyLoader)).apply(this, arguments));
  }

  _createClass(ZippyLoader, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var style = (0, _objectAssign2.default)({}, props.style, {
        width: props.size,
        height: props.size
      });

      var className = [props.className, DEFAULT_CLASS_NAME, props.theme && DEFAULT_CLASS_NAME + '--theme-' + props.theme].filter(notEmpty).join(' ');

      return _react2.default.createElement(
        'div',
        { style: style, className: className },
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--1' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--2' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--3' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--4' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--5' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--6' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--7' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--8' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--9' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--10' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--11' }),
        _react2.default.createElement('div', { className: LOADBAR_CLASSNAME + ' ' + LOADBAR_CLASSNAME + '--12' })
      );
    }
  }]);

  return ZippyLoader;
}(_react2.default.Component);

exports.default = ZippyLoader;


ZippyLoader.propTypes = { size: _propTypes2.default.number, theme: _propTypes2.default.string };
ZippyLoader.defaultProps = { size: 40 };