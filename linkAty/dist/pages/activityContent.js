'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$page) {
  _inherits(_class, _wepy$page);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '活动说明'
    }, _this.data = {
      content: {
        imagesPath: [],
        contentText: ''
      }
    }, _this.methods = {
      chooseImg: function chooseImg() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _content$imagesPath, _ref2, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _wepy2.default.chooseImage({ count: 6 });

                case 3:
                  _ref2 = _context.sent;
                  tempFilePaths = _ref2.tempFilePaths;

                  (_content$imagesPath = _this2.content.imagesPath).push.apply(_content$imagesPath, _toConsumableArray(tempFilePaths));
                  _this2.$apply();
                  _this2.setPreviouData();
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '图片选择失败'
                  });

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 10]]);
        }))();
      },
      deleteImg: function deleteImg(index) {
        this.content.imagesPath.splice(index, 1);
        this.$apply();
        this.setPreviouData();
      },
      viewPhoto: function viewPhoto(item) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _wepy2.default.previewImage({ urls: [item] });

                case 3:
                  _context2.next = 7;
                  break;

                case 5:
                  _context2.prev = 5;
                  _context2.t0 = _context2['catch'](0);

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 5]]);
        }))();
      },
      bindinput: function bindinput(e) {
        this.content.contentText = e.detail.value;
        this.$apply();
        this.setPreviouData();
      },
      submitContent: function submitContent() {
        _wepy2.default.navigateBack();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLoad',
    value: function onLoad(params, data) {
      var contentObj = data.preload.content;
      if (contentObj.contentText === '活动介绍') {
        this.content.contentText = '';
      } else {
        this.content.contentText = contentObj.contentText;
      }
      this.content.imagesPath = contentObj.imagesPath;
    }
  }, {
    key: 'setPreviouData',
    value: function setPreviouData() {
      try {
        _wepy2.default.setStorageSync('_content', this.content);
      } catch (e) {}
    }
  }]);

  return _class;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_class , 'pages/activityContent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5Q29udGVudC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbnRlbnQiLCJpbWFnZXNQYXRoIiwiY29udGVudFRleHQiLCJtZXRob2RzIiwiY2hvb3NlSW1nIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInRlbXBGaWxlUGF0aHMiLCJwdXNoIiwiJGFwcGx5Iiwic2V0UHJldmlvdURhdGEiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImRlbGV0ZUltZyIsImluZGV4Iiwic3BsaWNlIiwidmlld1Bob3RvIiwiaXRlbSIsInByZXZpZXdJbWFnZSIsInVybHMiLCJiaW5kaW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJzdWJtaXRDb250ZW50IiwibmF2aWdhdGVCYWNrIiwicGFyYW1zIiwiY29udGVudE9iaiIsInByZWxvYWQiLCJzZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzTEFFRUEsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTO0FBQ1BDLG9CQUFZLEVBREw7QUFFUEMscUJBQWE7QUFGTjtBQURKLEssUUFxQlBDLE8sR0FBVTtBQUNGQyxlQURFLHVCQUNVO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFYyxlQUFLQyxXQUFMLENBQWlCLEVBQUNDLE9BQU8sQ0FBUixFQUFqQixDQUZkOztBQUFBO0FBQUE7QUFFVEMsK0JBRlMsU0FFVEEsYUFGUzs7QUFHZCxnREFBS1AsT0FBTCxDQUFhQyxVQUFiLEVBQXdCTyxJQUF4QiwrQ0FBZ0NELGFBQWhDO0FBQ0EseUJBQUtFLE1BQUw7QUFDQSx5QkFBS0MsY0FBTDtBQUxjO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQU9kLGlDQUFLQyxTQUFMLENBQWU7QUFDYkMsMkJBQU8sSUFETTtBQUViWiw2QkFBUztBQUZJLG1CQUFmOztBQVBjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWpCLE9BYk87QUFjUmEsZUFkUSxxQkFjRUMsS0FkRixFQWNTO0FBQ2YsYUFBS2QsT0FBTCxDQUFhQyxVQUFiLENBQXdCYyxNQUF4QixDQUErQkQsS0FBL0IsRUFBc0MsQ0FBdEM7QUFDQSxhQUFLTCxNQUFMO0FBQ0EsYUFBS0MsY0FBTDtBQUNELE9BbEJPO0FBbUJGTSxlQW5CRSxxQkFtQlFDLElBbkJSLEVBbUJjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFWixlQUFLQyxZQUFMLENBQWtCLEVBQUNDLE1BQU0sQ0FBQ0YsSUFBRCxDQUFQLEVBQWxCLENBRlk7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtyQixPQXhCTztBQXlCUkcsZUF6QlEscUJBeUJFQyxDQXpCRixFQXlCSztBQUNYLGFBQUtyQixPQUFMLENBQWFFLFdBQWIsR0FBMkJtQixFQUFFQyxNQUFGLENBQVNDLEtBQXBDO0FBQ0EsYUFBS2QsTUFBTDtBQUNBLGFBQUtDLGNBQUw7QUFDRCxPQTdCTztBQThCUmMsbUJBOUJRLDJCQThCUTtBQUNkLHVCQUFLQyxZQUFMO0FBQ0Q7QUFoQ08sSzs7Ozs7MkJBZkhDLE0sRUFBUTNCLEksRUFBTTtBQUNuQixVQUFJNEIsYUFBYTVCLEtBQUs2QixPQUFMLENBQWE1QixPQUE5QjtBQUNBLFVBQUkyQixXQUFXekIsV0FBWCxLQUEyQixNQUEvQixFQUF1QztBQUNyQyxhQUFLRixPQUFMLENBQWFFLFdBQWIsR0FBMkIsRUFBM0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRixPQUFMLENBQWFFLFdBQWIsR0FBMkJ5QixXQUFXekIsV0FBdEM7QUFDRDtBQUNELFdBQUtGLE9BQUwsQ0FBYUMsVUFBYixHQUEwQjBCLFdBQVcxQixVQUFyQztBQUNEOzs7cUNBQ2dCO0FBQ2YsVUFBSTtBQUNGLHVCQUFLNEIsY0FBTCxDQUFvQixVQUFwQixFQUFnQyxLQUFLN0IsT0FBckM7QUFDRCxPQUZELENBRUUsT0FBT3FCLENBQVAsRUFBVSxDQUNYO0FBQ0Y7Ozs7RUF4QjBCLGVBQUtTLEkiLCJmaWxlIjoiYWN0aXZpdHlDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICBjb25maWcgPSB7XHJcbiAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rS75Yqo6K+05piOJ1xyXG4gICAgIH1cclxuICAgICBkYXRhID0ge1xyXG4gICAgICAgY29udGVudDoge1xyXG4gICAgICAgICBpbWFnZXNQYXRoOiBbXSxcclxuICAgICAgICAgY29udGVudFRleHQ6ICcnXHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIG9uTG9hZChwYXJhbXMsIGRhdGEpIHtcclxuICAgICAgIGxldCBjb250ZW50T2JqID0gZGF0YS5wcmVsb2FkLmNvbnRlbnRcclxuICAgICAgIGlmIChjb250ZW50T2JqLmNvbnRlbnRUZXh0ID09PSAn5rS75Yqo5LuL57uNJykge1xyXG4gICAgICAgICB0aGlzLmNvbnRlbnQuY29udGVudFRleHQgPSAnJ1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5jb250ZW50LmNvbnRlbnRUZXh0ID0gY29udGVudE9iai5jb250ZW50VGV4dFxyXG4gICAgICAgfVxyXG4gICAgICAgdGhpcy5jb250ZW50LmltYWdlc1BhdGggPSBjb250ZW50T2JqLmltYWdlc1BhdGhcclxuICAgICB9XHJcbiAgICAgc2V0UHJldmlvdURhdGEoKSB7XHJcbiAgICAgICB0cnkge1xyXG4gICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfY29udGVudCcsIHRoaXMuY29udGVudClcclxuICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgIGFzeW5jIGNob29zZUltZygpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICBsZXQge3RlbXBGaWxlUGF0aHN9ID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7Y291bnQ6IDZ9KVxyXG4gICAgICAgICAgIHRoaXMuY29udGVudC5pbWFnZXNQYXRoLnB1c2goLi4udGVtcEZpbGVQYXRocylcclxuICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgdGhpcy5zZXRQcmV2aW91RGF0YSgpXHJcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICBjb250ZW50OiAn5Zu+54mH6YCJ5oup5aSx6LSlJ1xyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1cclxuICAgICAgIH0sXHJcbiAgICAgICBkZWxldGVJbWcoaW5kZXgpIHtcclxuICAgICAgICAgdGhpcy5jb250ZW50LmltYWdlc1BhdGguc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgIHRoaXMuc2V0UHJldmlvdURhdGEoKVxyXG4gICAgICAgfSxcclxuICAgICAgIGFzeW5jIHZpZXdQaG90byhpdGVtKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgYXdhaXQgd2VweS5wcmV2aWV3SW1hZ2Uoe3VybHM6IFtpdGVtXX0pXHJcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgfVxyXG4gICAgICAgfSxcclxuICAgICAgIGJpbmRpbnB1dChlKSB7XHJcbiAgICAgICAgIHRoaXMuY29udGVudC5jb250ZW50VGV4dCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgdGhpcy5zZXRQcmV2aW91RGF0YSgpXHJcbiAgICAgICB9LFxyXG4gICAgICAgc3VibWl0Q29udGVudCgpIHtcclxuICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICB9XHJcbiJdfQ==