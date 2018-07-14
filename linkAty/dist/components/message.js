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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var message = function (_wepy$component) {
  _inherits(message, _wepy$component);

  function message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = message.__proto__ || Object.getPrototypeOf(message)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      itemObj: {
        type: Object,
        twoWay: true
      },
      messageItem: {
        type: Object,
        twoWay: true
      }
    }, _this.data = {
      session: '',
      userInfo: ''
    }, _this.methods = {
      // 同意或拒绝活动申请处理函数
      sendConfirm: function sendConfirm(type) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var date, dateStr, header, newMessage, toMessage, data, body;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  date = new Date();
                  dateStr = (0, _dateToStr.date2str)(date, 'datestr');
                  header = {};

                  header['session'] = _this2.session;
                  newMessage = {};

                  if (type === 'allow') {
                    newMessage['content'] = '我同意了你加入活动';
                  } else {
                    newMessage['content'] = '我拒绝了你加入活动';
                  }
                  newMessage.omitContent = false;
                  newMessage.type = 4;
                  newMessage.date = dateStr;
                  _this2.itemObj.message.push(newMessage);
                  toMessage = {
                    from: {
                      name: _this2.userInfo.name,
                      avatar: _this2.userInfo.avatar,
                      userid: _this2.session
                    },
                    to: _this2.itemObj.from.userid,
                    activity: {
                      name: _this2.itemObj.activity.name,
                      id: _this2.itemObj.activity.id
                    },
                    message: [{
                      date: dateStr,
                      content: newMessage.content,
                      type: type === 'allow' ? 2 : 1,
                      omitContent: false
                    }],
                    hadRead: false
                  };
                  data = {
                    messageId: _this2.itemObj._id,
                    message: _this2.itemObj.message,
                    toMessage: toMessage,
                    type: type // 根据type修改相应Activity的users列表
                  };
                  _context.next = 14;
                  return _wepy2.default.request({
                    url: _config.api.message.handRequestMsg.url,
                    method: _config.api.message.handRequestMsg.method,
                    data: data,
                    header: header
                  });

                case 14:
                  body = _context.sent;

                  if (body.data.code === -1) {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '网络错误'
                    });
                  }
                  _this2.$apply();

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(message, [{
    key: 'onLoad',
    value: function onLoad() {
      try {
        var userData = _wepy2.default.getStorageSync('_userinfo');
        this.userInfo = userData;
        var _session = _wepy2.default.getStorageSync('_session');
        this.session = _session.split('<<')[0];
      } catch (e) {}
    }
  }]);

  return message;
}(_wepy2.default.component);

exports.default = message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsInByb3BzIiwiaXRlbU9iaiIsInR5cGUiLCJPYmplY3QiLCJ0d29XYXkiLCJtZXNzYWdlSXRlbSIsImRhdGEiLCJzZXNzaW9uIiwidXNlckluZm8iLCJtZXRob2RzIiwic2VuZENvbmZpcm0iLCJkYXRlIiwiRGF0ZSIsImRhdGVTdHIiLCJoZWFkZXIiLCJuZXdNZXNzYWdlIiwib21pdENvbnRlbnQiLCJwdXNoIiwidG9NZXNzYWdlIiwiZnJvbSIsIm5hbWUiLCJhdmF0YXIiLCJ1c2VyaWQiLCJ0byIsImFjdGl2aXR5IiwiaWQiLCJjb250ZW50IiwiaGFkUmVhZCIsIm1lc3NhZ2VJZCIsIl9pZCIsInJlcXVlc3QiLCJ1cmwiLCJoYW5kUmVxdWVzdE1zZyIsIm1ldGhvZCIsImJvZHkiLCJjb2RlIiwic2hvd01vZGFsIiwidGl0bGUiLCIkYXBwbHkiLCJ1c2VyRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwiX3Nlc3Npb24iLCJzcGxpdCIsImUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE1BREM7QUFFUEMsZ0JBQVE7QUFGRCxPQURIO0FBS05DLG1CQUFhO0FBQ1hILGNBQU1DLE1BREs7QUFFWEMsZ0JBQVE7QUFGRztBQUxQLEssUUFVUkUsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxnQkFBVTtBQUZMLEssUUFhUEMsTyxHQUFVO0FBQ1I7QUFDTUMsaUJBRkUsdUJBRVVSLElBRlYsRUFFZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJTLHNCQURrQixHQUNYLElBQUlDLElBQUosRUFEVztBQUVsQkMseUJBRmtCLEdBRVIseUJBQVNGLElBQVQsRUFBZSxTQUFmLENBRlE7QUFHbEJHLHdCQUhrQixHQUdULEVBSFM7O0FBSXRCQSx5QkFBTyxTQUFQLElBQW9CLE9BQUtQLE9BQXpCO0FBQ0lRLDRCQUxrQixHQUtMLEVBTEs7O0FBTXRCLHNCQUFJYixTQUFTLE9BQWIsRUFBc0I7QUFDcEJhLCtCQUFXLFNBQVgsSUFBd0IsV0FBeEI7QUFDRCxtQkFGRCxNQUVPO0FBQ0xBLCtCQUFXLFNBQVgsSUFBd0IsV0FBeEI7QUFDRDtBQUNEQSw2QkFBV0MsV0FBWCxHQUF5QixLQUF6QjtBQUNBRCw2QkFBV2IsSUFBWCxHQUFrQixDQUFsQjtBQUNBYSw2QkFBV0osSUFBWCxHQUFrQkUsT0FBbEI7QUFDQSx5QkFBS1osT0FBTCxDQUFhRixPQUFiLENBQXFCa0IsSUFBckIsQ0FBMEJGLFVBQTFCO0FBQ0lHLDJCQWZrQixHQWVOO0FBQ2RDLDBCQUFNO0FBQ0pDLDRCQUFNLE9BQUtaLFFBQUwsQ0FBY1ksSUFEaEI7QUFFSkMsOEJBQVEsT0FBS2IsUUFBTCxDQUFjYSxNQUZsQjtBQUdKQyw4QkFBUSxPQUFLZjtBQUhULHFCQURRO0FBTWRnQix3QkFBSSxPQUFLdEIsT0FBTCxDQUFha0IsSUFBYixDQUFrQkcsTUFOUjtBQU9kRSw4QkFBVTtBQUNSSiw0QkFBTSxPQUFLbkIsT0FBTCxDQUFhdUIsUUFBYixDQUFzQkosSUFEcEI7QUFFUkssMEJBQUksT0FBS3hCLE9BQUwsQ0FBYXVCLFFBQWIsQ0FBc0JDO0FBRmxCLHFCQVBJO0FBV2QxQiw2QkFBUyxDQUFDO0FBQ1JZLDRCQUFNRSxPQURFO0FBRVJhLCtCQUFTWCxXQUFXVyxPQUZaO0FBR1J4Qiw0QkFBTUEsU0FBUyxPQUFULEdBQW1CLENBQW5CLEdBQXVCLENBSHJCO0FBSVJjLG1DQUFhO0FBSkwscUJBQUQsQ0FYSztBQWlCZFcsNkJBQVM7QUFqQkssbUJBZk07QUFrQ2xCckIsc0JBbENrQixHQWtDWDtBQUNUc0IsK0JBQVcsT0FBSzNCLE9BQUwsQ0FBYTRCLEdBRGY7QUFFVDlCLDZCQUFTLE9BQUtFLE9BQUwsQ0FBYUYsT0FGYjtBQUdUbUIsK0JBQVdBLFNBSEY7QUFJVGhCLDBCQUFNQSxJQUpHLENBSUU7QUFKRixtQkFsQ1c7QUFBQTtBQUFBLHlCQXdDSCxlQUFLNEIsT0FBTCxDQUFhO0FBQzlCQyx5QkFBSyxZQUFJaEMsT0FBSixDQUFZaUMsY0FBWixDQUEyQkQsR0FERjtBQUU5QkUsNEJBQVEsWUFBSWxDLE9BQUosQ0FBWWlDLGNBQVosQ0FBMkJDLE1BRkw7QUFHOUIzQiwwQkFBTUEsSUFId0I7QUFJOUJRLDRCQUFRQTtBQUpzQixtQkFBYixDQXhDRzs7QUFBQTtBQXdDaEJvQixzQkF4Q2dCOztBQThDdEIsc0JBQUlBLEtBQUs1QixJQUFMLENBQVU2QixJQUFWLEtBQW1CLENBQUMsQ0FBeEIsRUFBMkI7QUFDekIsbUNBQUtDLFNBQUwsQ0FBZTtBQUNiQyw2QkFBTyxJQURNO0FBRWJYLCtCQUFTO0FBRkkscUJBQWY7QUFJRDtBQUNELHlCQUFLWSxNQUFMOztBQXBEc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxRHZCO0FBdkRPLEs7Ozs7OzZCQVREO0FBQ1AsVUFBSTtBQUNGLFlBQUlDLFdBQVcsZUFBS0MsY0FBTCxDQUFvQixXQUFwQixDQUFmO0FBQ0EsYUFBS2hDLFFBQUwsR0FBZ0IrQixRQUFoQjtBQUNBLFlBQUlFLFdBQVcsZUFBS0QsY0FBTCxDQUFvQixVQUFwQixDQUFmO0FBQ0EsYUFBS2pDLE9BQUwsR0FBZWtDLFNBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLENBQXJCLENBQWY7QUFDRCxPQUxELENBS0UsT0FBT0MsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OztFQXZCa0MsZUFBS0MsUzs7a0JBQXJCN0MsTyIsImZpbGUiOiJtZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG4gICAgaW1wb3J0IHtkYXRlMnN0cn0gZnJvbSAnLi4vdXRpbHMvZGF0ZVRvU3RyJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWVzc2FnZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgcHJvcHMgPSB7XHJcbiAgICAgICAgaXRlbU9iajoge1xyXG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlSXRlbToge1xyXG4gICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgdHdvV2F5OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgc2Vzc2lvbjogJycsXHJcbiAgICAgICAgdXNlckluZm86ICcnXHJcbiAgICAgIH1cclxuICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgdXNlckRhdGEgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfdXNlcmluZm8nKVxyXG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJEYXRhXHJcbiAgICAgICAgICBsZXQgX3Nlc3Npb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfc2Vzc2lvbicpXHJcbiAgICAgICAgICB0aGlzLnNlc3Npb24gPSBfc2Vzc2lvbi5zcGxpdCgnPDwnKVswXVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDlkIzmhI/miJbmi5Lnu53mtLvliqjnlLPor7flpITnkIblh73mlbBcclxuICAgICAgICBhc3luYyBzZW5kQ29uZmlybSh0eXBlKSB7XHJcbiAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgIGxldCBkYXRlU3RyID0gZGF0ZTJzdHIoZGF0ZSwgJ2RhdGVzdHInKVxyXG4gICAgICAgICAgbGV0IGhlYWRlciA9IHt9XHJcbiAgICAgICAgICBoZWFkZXJbJ3Nlc3Npb24nXSA9IHRoaXMuc2Vzc2lvblxyXG4gICAgICAgICAgbGV0IG5ld01lc3NhZ2UgPSB7fVxyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdhbGxvdycpIHtcclxuICAgICAgICAgICAgbmV3TWVzc2FnZVsnY29udGVudCddID0gJ+aIkeWQjOaEj+S6huS9oOWKoOWFpea0u+WKqCdcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld01lc3NhZ2VbJ2NvbnRlbnQnXSA9ICfmiJHmi5Lnu53kuobkvaDliqDlhaXmtLvliqgnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdNZXNzYWdlLm9taXRDb250ZW50ID0gZmFsc2VcclxuICAgICAgICAgIG5ld01lc3NhZ2UudHlwZSA9IDRcclxuICAgICAgICAgIG5ld01lc3NhZ2UuZGF0ZSA9IGRhdGVTdHJcclxuICAgICAgICAgIHRoaXMuaXRlbU9iai5tZXNzYWdlLnB1c2gobmV3TWVzc2FnZSlcclxuICAgICAgICAgIGxldCB0b01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGZyb206IHtcclxuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnVzZXJJbmZvLm5hbWUsXHJcbiAgICAgICAgICAgICAgYXZhdGFyOiB0aGlzLnVzZXJJbmZvLmF2YXRhcixcclxuICAgICAgICAgICAgICB1c2VyaWQ6IHRoaXMuc2Vzc2lvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0bzogdGhpcy5pdGVtT2JqLmZyb20udXNlcmlkLFxyXG4gICAgICAgICAgICBhY3Rpdml0eToge1xyXG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMuaXRlbU9iai5hY3Rpdml0eS5uYW1lLFxyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLml0ZW1PYmouYWN0aXZpdHkuaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVzc2FnZTogW3tcclxuICAgICAgICAgICAgICBkYXRlOiBkYXRlU3RyLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IG5ld01lc3NhZ2UuY29udGVudCxcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlID09PSAnYWxsb3cnID8gMiA6IDEsXHJcbiAgICAgICAgICAgICAgb21pdENvbnRlbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBoYWRSZWFkOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogdGhpcy5pdGVtT2JqLl9pZCxcclxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5pdGVtT2JqLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRvTWVzc2FnZTogdG9NZXNzYWdlLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlIC8vIOagueaNrnR5cGXkv67mlLnnm7jlupRBY3Rpdml0eeeahHVzZXJz5YiX6KGoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBhcGkubWVzc2FnZS5oYW5kUmVxdWVzdE1zZy51cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLm1lc3NhZ2UuaGFuZFJlcXVlc3RNc2cubWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmIChib2R5LmRhdGEuY29kZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAn572R57uc6ZSZ6K+vJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4iXX0=