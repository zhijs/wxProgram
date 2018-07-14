'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activityIntroduce = function (_wepy$page) {
  _inherits(activityIntroduce, _wepy$page);

  function activityIntroduce() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, activityIntroduce);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = activityIntroduce.__proto__ || Object.getPrototypeOf(activityIntroduce)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '活动详情'
    }, _this.data = {
      content: ''
    }, _this.methods = {
      viewPhoto: function viewPhoto(item) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _wepy2.default.previewImage({ urls: [item] });

                case 3:
                  _context.next = 7;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 5]]);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(activityIntroduce, [{
    key: 'onLoad',
    value: function onLoad(params, content) {
      this.content = content.preload.content;
    }
  }]);

  return activityIntroduce;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(activityIntroduce , 'pages/activityIntroduce'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5SW50cm9kdWNlLmpzIl0sIm5hbWVzIjpbImFjdGl2aXR5SW50cm9kdWNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb250ZW50IiwibWV0aG9kcyIsInZpZXdQaG90byIsIml0ZW0iLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwicGFyYW1zIiwicHJlbG9hZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0c7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFESixLLFFBTVBDLE8sR0FBVTtBQUNGQyxlQURFLHFCQUNRQyxJQURSLEVBQ2M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVaLGVBQUtDLFlBQUwsQ0FBa0IsRUFBQ0MsTUFBTSxDQUFDRixJQUFELENBQVAsRUFBbEIsQ0FGWTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3JCO0FBTk8sSzs7Ozs7MkJBSEhHLE0sRUFBUU4sTyxFQUFTO0FBQ3RCLFdBQUtBLE9BQUwsR0FBZUEsUUFBUU8sT0FBUixDQUFnQlAsT0FBL0I7QUFDRDs7OztFQVQ0QyxlQUFLUSxJOztrQkFBL0JaLGlCIiwiZmlsZSI6ImFjdGl2aXR5SW50cm9kdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGFjdGl2aXR5SW50cm9kdWNlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICBjb25maWcgPSB7XHJcbiAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rS75Yqo6K+m5oOFJ1xyXG4gICAgIH1cclxuICAgICBkYXRhID0ge1xyXG4gICAgICAgY29udGVudDogJydcclxuICAgICB9XHJcbiAgICAgb25Mb2FkKHBhcmFtcywgY29udGVudCkge1xyXG4gICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudC5wcmVsb2FkLmNvbnRlbnRcclxuICAgICB9XHJcbiAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgIGFzeW5jIHZpZXdQaG90byhpdGVtKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgYXdhaXQgd2VweS5wcmV2aWV3SW1hZ2Uoe3VybHM6IFtpdGVtXX0pXHJcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4iXX0=