'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCleanProps = require('@zippytech/react-clean-props');

var _reactCleanProps2 = _interopRequireDefault(_reactCleanProps);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

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

var DEFAULT_CLASS_NAME = 'zippy-react-load-mask';

var notEmpty = function notEmpty(s) {
  return !!s;
};

var ZippyLoadMask = function (_React$Component) {
  _inherits(ZippyLoadMask, _React$Component);

  function ZippyLoadMask() {
    _classCallCheck(this, ZippyLoadMask);

    return _possibleConstructorReturn(this, (ZippyLoadMask.__proto__ || Object.getPrototypeOf(ZippyLoadMask)).apply(this, arguments));
  }

  _createClass(ZippyLoadMask, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var visibleClassName = props.visible ? DEFAULT_CLASS_NAME + '--visible' : '';
      var className = [props.className, DEFAULT_CLASS_NAME, visibleClassName, props.theme && DEFAULT_CLASS_NAME + '--theme-' + props.theme].filter(notEmpty).join(' ');

      return _react2.default.createElement(
        'div',
        _extends({}, (0, _reactCleanProps2.default)(props, ZippyLoadMask.propTypes), {
          className: className
        }),
        _react2.default.createElement(_Loader2.default, { size: props.size, theme: props.theme }),
        this.props.children
      );
    }
  }]);

  return ZippyLoadMask;
}(_react2.default.Component);

exports.default = ZippyLoadMask;


ZippyLoadMask.defaultProps = { visible: false, theme: 'default' };

ZippyLoadMask.propTypes = { visible: _propTypes2.default.bool, theme: _propTypes2.default.string };