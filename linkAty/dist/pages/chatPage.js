'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _message = require('./../components/message.js');

var _message2 = _interopRequireDefault(_message);

var _dateToStr = require('./../utils/dateToStr.js');

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chatPage = function (_wepy$page) {
  _inherits(chatPage, _wepy$page);

  function chatPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, chatPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chatPage.__proto__ || Object.getPrototypeOf(chatPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消息'
    }, _this.$repeat = { "newItem": { "com": "message", "props": "messageItem.sync" } }, _this.$props = { "message": { "xmlns:v-bind": { "value": "", "for": "newItem.message", "item": "item", "index": "index", "key": "key" }, "v-bind:messageItem.sync": { "value": "item", "type": "item", "for": "newItem.message", "item": "item", "index": "index", "key": "key" }, "v-bind:itemObj.sync": { "value": "newItem", "for": "newItem.message", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      message: _message2.default
    }, _this.data = {
      newItem: '',
      new_message: '',
      session: '',
      userInfo: ''
    }, _this.methods = {
      send: function send() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var date, omitContent, dateStr, userData, myMessage, newMessage, header, data, body;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  date = new Date();
                  omitContent = _this2.new_message.length > 15 ? _this2.new_message.substr(0, 16) + '' : false;
                  dateStr = (0, _dateToStr.date2str)(date, 'datestr');
                  userData = {
                    userid: _this2.session,
                    name: _this2.userInfo.name,
                    avatar: _this2.userInfo.avatar
                  };
                  myMessage = {
                    type: 4,
                    content: _this2.new_message,
                    omitContent: omitContent,
                    date: dateStr
                  };
                  newMessage = _this2.newItem.message;

                  newMessage.push(myMessage);
                  header = {};

                  header['seesion'] = _this2.session;
                  data = {
                    myMessageId: _this2.newItem._id,
                    myMessage: newMessage,
                    toUserId: _this2.newItem.from.userid,
                    activity: _this2.newItem.activity,
                    userData: userData
                  };
                  _context.prev = 10;
                  _context.next = 13;
                  return _wepy2.default.request({
                    url: _config.api.message.chatSend.url,
                    method: _config.api.message.chatSend.method,
                    data: data,
                    header: header
                  });

                case 13:
                  body = _context.sent;

                  if (body.data.code === -1) {
                    _this2.newItem.message.pop();
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '图片上传出错'
                    });
                  }
                  _context.next = 19;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context['catch'](10);

                case 19:
                  _this2.new_message = '';
                  _this2.$apply();

                case 21:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[10, 17]]);
        }))();
      },
      messageChange: function messageChange(event) {
        this.new_message = event.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(chatPage, [{
    key: 'onLoad',
    value: function onLoad(params, data) {
      this.newItem = data.preload.item;
      this.session = this.$parent.globalData.openId;
      this.userInfo = this.$parent.globalData.userInfo;
    }
  }]);

  return chatPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(chatPage , 'pages/chatPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRQYWdlLmpzIl0sIm5hbWVzIjpbImNoYXRQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1lc3NhZ2UiLCJkYXRhIiwibmV3SXRlbSIsIm5ld19tZXNzYWdlIiwic2Vzc2lvbiIsInVzZXJJbmZvIiwibWV0aG9kcyIsInNlbmQiLCJkYXRlIiwiRGF0ZSIsIm9taXRDb250ZW50IiwibGVuZ3RoIiwic3Vic3RyIiwiZGF0ZVN0ciIsInVzZXJEYXRhIiwidXNlcmlkIiwibmFtZSIsImF2YXRhciIsIm15TWVzc2FnZSIsInR5cGUiLCJjb250ZW50IiwibmV3TWVzc2FnZSIsInB1c2giLCJoZWFkZXIiLCJteU1lc3NhZ2VJZCIsIl9pZCIsInRvVXNlcklkIiwiZnJvbSIsImFjdGl2aXR5IiwicmVxdWVzdCIsInVybCIsImNoYXRTZW5kIiwibWV0aG9kIiwiYm9keSIsImNvZGUiLCJwb3AiLCJzaG93TW9kYWwiLCJ0aXRsZSIsIiRhcHBseSIsIm1lc3NhZ2VDaGFuZ2UiLCJldmVudCIsImRldGFpbCIsInZhbHVlIiwicGFyYW1zIiwicHJlbG9hZCIsIml0ZW0iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIm9wZW5JZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0c7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxPQUFNLFNBQVAsRUFBaUIsU0FBUSxrQkFBekIsRUFBWCxFLFFBQ2RDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0saUJBQWxCLEVBQW9DLFFBQU8sTUFBM0MsRUFBa0QsU0FBUSxPQUExRCxFQUFrRSxPQUFNLEtBQXhF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QUFDbkIsV0FBS0MsT0FBTCxHQUFlRCxLQUFLMkMsT0FBTCxDQUFhQyxJQUE1QjtBQUNBLFdBQUt6QyxPQUFMLEdBQWUsS0FBSzBDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsTUFBdkM7QUFDQSxXQUFLM0MsUUFBTCxHQUFnQixLQUFLeUMsT0FBTCxDQUFhQyxVQUFiLENBQXdCMUMsUUFBeEM7QUFDRDs7OztFQXBCbUMsZUFBSzRDLEk7O2tCQUF0QnhELFEiLCJmaWxlIjoiY2hhdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi4vLi9jb21wb25lbnRzL21lc3NhZ2UnXHJcbiAgIGltcG9ydCB7ZGF0ZTJzdHJ9IGZyb20gJy4uL3V0aWxzL2RhdGVUb1N0cidcclxuICAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG4gICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjaGF0UGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgY29uZmlnID0ge1xyXG4gICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a2iOaBrydcclxuICAgICB9XHJcbiAgICAkcmVwZWF0ID0ge1wibmV3SXRlbVwiOntcImNvbVwiOlwibWVzc2FnZVwiLFwicHJvcHNcIjpcIm1lc3NhZ2VJdGVtLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJtZXNzYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJuZXdJdGVtLm1lc3NhZ2VcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6bWVzc2FnZUl0ZW0uc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm5ld0l0ZW0ubWVzc2FnZVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppdGVtT2JqLnN5bmNcIjp7XCJ2YWx1ZVwiOlwibmV3SXRlbVwiLFwiZm9yXCI6XCJuZXdJdGVtLm1lc3NhZ2VcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICB9XHJcbiAgICAgZGF0YSA9IHtcclxuICAgICAgIG5ld0l0ZW06ICcnLFxyXG4gICAgICAgbmV3X21lc3NhZ2U6ICcnLFxyXG4gICAgICAgc2Vzc2lvbjogJycsXHJcbiAgICAgICB1c2VySW5mbzogJydcclxuICAgICB9XHJcbiAgICAgb25Mb2FkKHBhcmFtcywgZGF0YSkge1xyXG4gICAgICAgdGhpcy5uZXdJdGVtID0gZGF0YS5wcmVsb2FkLml0ZW1cclxuICAgICAgIHRoaXMuc2Vzc2lvbiA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZFxyXG4gICAgICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICAgfVxyXG4gICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICBhc3luYyBzZW5kKCkge1xyXG4gICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgbGV0IG9taXRDb250ZW50ID0gdGhpcy5uZXdfbWVzc2FnZS5sZW5ndGggPiAxNSA/ICh0aGlzLm5ld19tZXNzYWdlLnN1YnN0cigwLCAxNikgKyAnJykgOiBmYWxzZVxyXG4gICAgICAgICBsZXQgZGF0ZVN0ciA9IGRhdGUyc3RyKGRhdGUsICdkYXRlc3RyJylcclxuICAgICAgICAgbGV0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgIHVzZXJpZDogdGhpcy5zZXNzaW9uLFxyXG4gICAgICAgICAgIG5hbWU6IHRoaXMudXNlckluZm8ubmFtZSxcclxuICAgICAgICAgICBhdmF0YXI6IHRoaXMudXNlckluZm8uYXZhdGFyXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IG15TWVzc2FnZSA9IHtcclxuICAgICAgICAgICB0eXBlOiA0LFxyXG4gICAgICAgICAgIGNvbnRlbnQ6IHRoaXMubmV3X21lc3NhZ2UsXHJcbiAgICAgICAgICAgb21pdENvbnRlbnQ6IG9taXRDb250ZW50LFxyXG4gICAgICAgICAgIGRhdGU6IGRhdGVTdHJcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsZXQgbmV3TWVzc2FnZSA9IHRoaXMubmV3SXRlbS5tZXNzYWdlXHJcbiAgICAgICAgIG5ld01lc3NhZ2UucHVzaChteU1lc3NhZ2UpXHJcbiAgICAgICAgIGxldCBoZWFkZXIgPSB7fVxyXG4gICAgICAgICBoZWFkZXJbJ3NlZXNpb24nXSA9IHRoaXMuc2Vzc2lvblxyXG4gICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICBteU1lc3NhZ2VJZDogdGhpcy5uZXdJdGVtLl9pZCxcclxuICAgICAgICAgICBteU1lc3NhZ2U6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgICAgdG9Vc2VySWQ6IHRoaXMubmV3SXRlbS5mcm9tLnVzZXJpZCxcclxuICAgICAgICAgICBhY3Rpdml0eTogdGhpcy5uZXdJdGVtLmFjdGl2aXR5LFxyXG4gICAgICAgICAgIHVzZXJEYXRhXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgIHVybDogYXBpLm1lc3NhZ2UuY2hhdFNlbmQudXJsLFxyXG4gICAgICAgICAgICAgbWV0aG9kOiBhcGkubWVzc2FnZS5jaGF0U2VuZC5tZXRob2QsXHJcbiAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIGlmIChib2R5LmRhdGEuY29kZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgIHRoaXMubmV3SXRlbS5tZXNzYWdlLnBvcCgpXHJcbiAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgY29udGVudDogJ+WbvueJh+S4iuS8oOWHuumUmSdcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5uZXdfbWVzc2FnZSA9ICcnXHJcbiAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgIH0sXHJcbiAgICAgICBtZXNzYWdlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgIHRoaXMubmV3X21lc3NhZ2UgPSBldmVudC5kZXRhaWwudmFsdWVcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIl19