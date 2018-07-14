'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activity = function (_wepy$component) {
  _inherits(activity, _wepy$component);

  function activity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, activity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = activity.__proto__ || Object.getPrototypeOf(activity)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      dataItem: Object
      /*
      data = {
        type: '社团活动',
        title: '北门一日游',
        date: '2017/12/30 10:00',
        location: '深大北门',
        humanNum: 10,
        img: '../../assets/svgs/avatar/test.jpg'
      }
      */
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(activity, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return activity;
}(_wepy2.default.component);

exports.default = activity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmpzIl0sIm5hbWVzIjpbImFjdGl2aXR5IiwicHJvcHMiLCJkYXRhSXRlbSIsIk9iamVjdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVUM7QUFFWjs7Ozs7Ozs7OztBQUhRLEs7Ozs7OzZCQWFFLENBQ1Q7Ozs7RUFmbUMsZUFBS0MsUzs7a0JBQXRCSixRIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhY3Rpdml0eSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBkYXRhSXRlbTogT2JqZWN0XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdHlwZTogJ+ekvuWboua0u+WKqCcsXHJcbiAgICAgIHRpdGxlOiAn5YyX6Zeo5LiA5pel5ri4JyxcclxuICAgICAgZGF0ZTogJzIwMTcvMTIvMzAgMTA6MDAnLFxyXG4gICAgICBsb2NhdGlvbjogJ+a3seWkp+WMl+mXqCcsXHJcbiAgICAgIGh1bWFuTnVtOiAxMCxcclxuICAgICAgaW1nOiAnLi4vLi4vYXNzZXRzL3N2Z3MvYXZhdGFyL3Rlc3QuanBnJ1xyXG4gICAgfVxyXG4gICAgKi9cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=