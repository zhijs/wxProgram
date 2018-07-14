'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _dateToStr = require('./../utils/dateToStr.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var joinPage = function (_wepy$page) {
  _inherits(joinPage, _wepy$page);

  function joinPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, joinPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = joinPage.__proto__ || Object.getPrototypeOf(joinPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '报名'
    }, _this.data = {
      activityObj: '',
      dataContent: '',
      session: '',
      userinfo: ''
    }, _this.methods = {
      submit: function submit() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var date, omitContent, dateStr, header, messageData, body, page, key;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  date = new Date();
                  omitContent = _this2.dataContent.length > 15 ? _this2.dataContent.substr(0, 16) + '' : false;
                  dateStr = (0, _dateToStr.date2str)(date, 'datestr');
                  header = {};

                  header['session'] = _this2.session;
                  _this2.activityObj.requestJoinUser.push(_this2.session);
                  messageData = {
                    from: {
                      name: _this2.userinfo.name,
                      avatar: _this2.userinfo.avatar,
                      userid: _this2.session
                    },
                    to: _this2.activityObj.author,
                    activity: {
                      id: _this2.activityObj._id,
                      name: _this2.activityObj.title
                    },
                    message: [{
                      type: 0,
                      date: dateStr,
                      content: _this2.dataContent,
                      omitContent: omitContent
                    }],
                    hadRead: false
                  };
                  _context.next = 9;
                  return _wepy2.default.request({
                    url: _config.api.activity.joinRequest.url,
                    method: _config.api.activity.joinRequest.method,
                    data: {
                      message: messageData,
                      requestUser: _this2.activityObj.requestJoinUser
                    },
                    header: header
                  });

                case 9:
                  body = _context.sent;

                  if (body.data.code === 1) {
                    page = _this2.getCurrentPages();
                    key = 'requested';

                    page[1].setData(_defineProperty({}, key, true));
                    _this2.$apply();
                    _wepy2.default.navigateBack();
                  }

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      bindinput: function bindinput(e) {
        this.dataContent = e.detail.value;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(joinPage, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, data) {
        var _userinfo;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.activityObj = data.preload.activityObj;
                this.session = this.$parent.globalData.openId;
                try {
                  _userinfo = _wepy2.default.getStorageSync('_userinfo');

                  this.userinfo = _userinfo;
                } catch (e) {}

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return joinPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(joinPage , 'pages/joinPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW5QYWdlLmpzIl0sIm5hbWVzIjpbImpvaW5QYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhY3Rpdml0eU9iaiIsImRhdGFDb250ZW50Iiwic2Vzc2lvbiIsInVzZXJpbmZvIiwibWV0aG9kcyIsInN1Ym1pdCIsImRhdGUiLCJEYXRlIiwib21pdENvbnRlbnQiLCJsZW5ndGgiLCJzdWJzdHIiLCJkYXRlU3RyIiwiaGVhZGVyIiwicmVxdWVzdEpvaW5Vc2VyIiwicHVzaCIsIm1lc3NhZ2VEYXRhIiwiZnJvbSIsIm5hbWUiLCJhdmF0YXIiLCJ1c2VyaWQiLCJ0byIsImF1dGhvciIsImFjdGl2aXR5IiwiaWQiLCJfaWQiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiY29udGVudCIsImhhZFJlYWQiLCJyZXF1ZXN0IiwidXJsIiwiam9pblJlcXVlc3QiLCJtZXRob2QiLCJyZXF1ZXN0VXNlciIsImJvZHkiLCJjb2RlIiwicGFnZSIsImdldEN1cnJlbnRQYWdlcyIsImtleSIsInNldERhdGEiLCIkYXBwbHkiLCJuYXZpZ2F0ZUJhY2siLCJiaW5kaW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwYXJhbXMiLCJwcmVsb2FkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJvcGVuSWQiLCJfdXNlcmluZm8iLCJnZXRTdG9yYWdlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsbUJBQWEsRUFGUjtBQUdMQyxlQUFTLEVBSEo7QUFJTEMsZ0JBQVU7QUFKTCxLLFFBZVBDLE8sR0FBVTtBQUNGQyxZQURFLG9CQUNPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLHNCQURTLEdBQ0YsSUFBSUMsSUFBSixFQURFO0FBRVRDLDZCQUZTLEdBRUssT0FBS1AsV0FBTCxDQUFpQlEsTUFBakIsR0FBMEIsRUFBMUIsR0FBZ0MsT0FBS1IsV0FBTCxDQUFpQlMsTUFBakIsQ0FBd0IsQ0FBeEIsRUFBMkIsRUFBM0IsSUFBaUMsRUFBakUsR0FBdUUsS0FGNUU7QUFHVEMseUJBSFMsR0FHQyx5QkFBU0wsSUFBVCxFQUFlLFNBQWYsQ0FIRDtBQUlUTSx3QkFKUyxHQUlBLEVBSkE7O0FBS2JBLHlCQUFPLFNBQVAsSUFBb0IsT0FBS1YsT0FBekI7QUFDQSx5QkFBS0YsV0FBTCxDQUFpQmEsZUFBakIsQ0FBaUNDLElBQWpDLENBQXNDLE9BQUtaLE9BQTNDO0FBQ0lhLDZCQVBTLEdBT0s7QUFDaEJDLDBCQUFNO0FBQ0pDLDRCQUFNLE9BQUtkLFFBQUwsQ0FBY2MsSUFEaEI7QUFFSkMsOEJBQVEsT0FBS2YsUUFBTCxDQUFjZSxNQUZsQjtBQUdKQyw4QkFBUSxPQUFLakI7QUFIVCxxQkFEVTtBQU1oQmtCLHdCQUFJLE9BQUtwQixXQUFMLENBQWlCcUIsTUFOTDtBQU9oQkMsOEJBQVU7QUFDUkMsMEJBQUksT0FBS3ZCLFdBQUwsQ0FBaUJ3QixHQURiO0FBRVJQLDRCQUFNLE9BQUtqQixXQUFMLENBQWlCeUI7QUFGZixxQkFQTTtBQVdoQkMsNkJBQVMsQ0FBQztBQUNSQyw0QkFBTSxDQURFO0FBRVJyQiw0QkFBTUssT0FGRTtBQUdSaUIsK0JBQVMsT0FBSzNCLFdBSE47QUFJUk8sbUNBQWFBO0FBSkwscUJBQUQsQ0FYTztBQWlCaEJxQiw2QkFBUztBQWpCTyxtQkFQTDtBQUFBO0FBQUEseUJBMEJNLGVBQUtDLE9BQUwsQ0FBYTtBQUM5QkMseUJBQUssWUFBSVQsUUFBSixDQUFhVSxXQUFiLENBQXlCRCxHQURBO0FBRTlCRSw0QkFBUSxZQUFJWCxRQUFKLENBQWFVLFdBQWIsQ0FBeUJDLE1BRkg7QUFHOUJsQywwQkFBTTtBQUNKMkIsK0JBQVNYLFdBREw7QUFFSm1CLG1DQUFhLE9BQUtsQyxXQUFMLENBQWlCYTtBQUYxQixxQkFId0I7QUFPOUJELDRCQUFRQTtBQVBzQixtQkFBYixDQTFCTjs7QUFBQTtBQTBCUHVCLHNCQTFCTzs7QUFtQ2Isc0JBQUlBLEtBQUtwQyxJQUFMLENBQVVxQyxJQUFWLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3BCQyx3QkFEb0IsR0FDYixPQUFLQyxlQUFMLEVBRGE7QUFFcEJDLHVCQUZvQixHQUVkLFdBRmM7O0FBR3hCRix5QkFBSyxDQUFMLEVBQVFHLE9BQVIscUJBQ0dELEdBREgsRUFDUyxJQURUO0FBR0EsMkJBQUtFLE1BQUw7QUFDQSxtQ0FBS0MsWUFBTDtBQUNEOztBQTNDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRDZCxPQTdDTztBQThDUkMsZUE5Q1EscUJBOENFQyxDQTlDRixFQThDSztBQUNYLGFBQUszQyxXQUFMLEdBQW1CMkMsRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNBLGFBQUtMLE1BQUw7QUFDRDtBQWpETyxLOzs7Ozs7NEZBVEdNLE0sRUFBUWhELEk7Ozs7Ozs7QUFDbkIscUJBQUtDLFdBQUwsR0FBbUJELEtBQUtpRCxPQUFMLENBQWFoRCxXQUFoQztBQUNBLHFCQUFLRSxPQUFMLEdBQWUsS0FBSytDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsTUFBdkM7QUFDQSxvQkFBSTtBQUNFQywyQkFERixHQUNjLGVBQUtDLGNBQUwsQ0FBb0IsV0FBcEIsQ0FEZDs7QUFFRix1QkFBS2xELFFBQUwsR0FBZ0JpRCxTQUFoQjtBQUNELGlCQUhELENBR0UsT0FBT1IsQ0FBUCxFQUFVLENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQmlDLGVBQUtQLEk7O2tCQUF0QnpDLFEiLCJmaWxlIjoiam9pblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9jb25maWcnXHJcbiAgICBpbXBvcnQge2RhdGUyc3RyfSBmcm9tICcuLi91dGlscy9kYXRlVG9TdHInXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBqb2luUGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oql5ZCNJ1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYWN0aXZpdHlPYmo6ICcnLFxyXG4gICAgICAgIGRhdGFDb250ZW50OiAnJyxcclxuICAgICAgICBzZXNzaW9uOiAnJyxcclxuICAgICAgICB1c2VyaW5mbzogJydcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBvbkxvYWQocGFyYW1zLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0eU9iaiA9IGRhdGEucHJlbG9hZC5hY3Rpdml0eU9ialxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgX3VzZXJpbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygnX3VzZXJpbmZvJylcclxuICAgICAgICAgIHRoaXMudXNlcmluZm8gPSBfdXNlcmluZm9cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgYXN5bmMgc3VibWl0KCkge1xyXG4gICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICBsZXQgb21pdENvbnRlbnQgPSB0aGlzLmRhdGFDb250ZW50Lmxlbmd0aCA+IDE1ID8gKHRoaXMuZGF0YUNvbnRlbnQuc3Vic3RyKDAsIDE2KSArICcnKSA6IGZhbHNlXHJcbiAgICAgICAgICBsZXQgZGF0ZVN0ciA9IGRhdGUyc3RyKGRhdGUsICdkYXRlc3RyJylcclxuICAgICAgICAgIGxldCBoZWFkZXIgPSB7fVxyXG4gICAgICAgICAgaGVhZGVyWydzZXNzaW9uJ10gPSB0aGlzLnNlc3Npb25cclxuICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYmoucmVxdWVzdEpvaW5Vc2VyLnB1c2godGhpcy5zZXNzaW9uKVxyXG4gICAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0ge1xyXG4gICAgICAgICAgICBmcm9tOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy51c2VyaW5mby5uYW1lLFxyXG4gICAgICAgICAgICAgIGF2YXRhcjogdGhpcy51c2VyaW5mby5hdmF0YXIsXHJcbiAgICAgICAgICAgICAgdXNlcmlkOiB0aGlzLnNlc3Npb25cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG86IHRoaXMuYWN0aXZpdHlPYmouYXV0aG9yLFxyXG4gICAgICAgICAgICBhY3Rpdml0eToge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLmFjdGl2aXR5T2JqLl9pZCxcclxuICAgICAgICAgICAgICBuYW1lOiB0aGlzLmFjdGl2aXR5T2JqLnRpdGxlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogMCxcclxuICAgICAgICAgICAgICBkYXRlOiBkYXRlU3RyLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZGF0YUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgb21pdENvbnRlbnQ6IG9taXRDb250ZW50XHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBoYWRSZWFkOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYXBpLmFjdGl2aXR5LmpvaW5SZXF1ZXN0LnVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBhcGkuYWN0aXZpdHkuam9pblJlcXVlc3QubWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZURhdGEsXHJcbiAgICAgICAgICAgICAgcmVxdWVzdFVzZXI6IHRoaXMuYWN0aXZpdHlPYmoucmVxdWVzdEpvaW5Vc2VyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKGJvZHkuZGF0YS5jb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5nZXRDdXJyZW50UGFnZXMoKVxyXG4gICAgICAgICAgICBsZXQga2V5ID0gJ3JlcXVlc3RlZCdcclxuICAgICAgICAgICAgcGFnZVsxXS5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBba2V5XTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRpbnB1dChlKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFDb250ZW50ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuIl19