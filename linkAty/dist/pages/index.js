'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _activity = require('./../components/activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _newItem = require('./../components/newItem.js');

var _newItem2 = _interopRequireDefault(_newItem);

var _myactivity = require('./../components/myactivity.js');

var _myactivity2 = _interopRequireDefault(_myactivity);

var _index = require('./../interfaces/index.js');

var _index2 = _interopRequireDefault(_index);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_wepy$page) {
  _inherits(index, _wepy$page);

  function index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '校园活动广场'
    }, _this.data = {
      showIndex: 0,
      userInfo: '',
      session: '',
      myactivitys: [],
      activityList: [],
      news: [],
      activityPage: 1,
      newPage: 1,
      end: false,
      loadMored: true,
      loadMessgeTask: null
    }, _this.$repeat = { "activityList": { "com": "activity", "props": "dataItem" }, "news": { "com": "newitem", "props": "newItem.sync" }, "myactivitys": { "com": "myactivity", "props": "item.sync" } }, _this.$props = { "activity": { "xmlns:v-bind": { "value": "", "for": "activityList", "item": "item", "index": "index", "key": "index" }, "v-bind:dataItem.once": { "value": "item", "type": "item", "for": "activityList", "item": "item", "index": "index", "key": "index" } }, "newitem": { "v-bind:newItem.sync": { "value": "item", "type": "item", "for": "news", "item": "item", "index": "index", "key": "index" }, "v-bind:items.sync": { "value": "news", "for": "news", "item": "item", "index": "index", "key": "index" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "news", "item": "item", "index": "index", "key": "index" } }, "myactivity": { "v-bind:item.sync": { "value": "item", "type": "item", "for": "myactivitys", "item": "item", "index": "index", "key": "key" }, "v-bind:activitys.sync": { "value": "myactivitys", "for": "myactivitys", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "myactivitys", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      activity: _activity2.default,
      newitem: _newItem2.default,
      myactivity: _myactivity2.default

      /*
      *  数据请求
      *  活动列表 消息数据
      */
    }, _this.methods = {
      changeTab: function changeTab(index) {
        var _this2 = this;

        this.showIndex = parseInt(index);
        if (this.showIndex === 1) {
          this.loadMessgeTask = setInterval(function () {
            _this2.loadMessage();
          }, 5000);
        } else if (this.loadMessgeTask !== null) {
          clearInterval(this.loadMessgeTask);
        }
        this.$apply();
      },
      openDetail: function openDetail(index, event) {
        var data = {
          item: this.activityList[index],
          itemIndex: index
        };
        this.$preload('data', data);
        this.$navigate('activityDetail');
      },
      openChat: function openChat(index) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var header, data, body;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  header = {};

                  header['session'] = _this3.session;
                  data = { messageId: _this3.news[index]._id };

                  if (_this3.news[index].hadRead) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 6;
                  return _wepy2.default.request({
                    url: _config.api.message.read.url,
                    method: _config.api.message.read.method,
                    header: header,
                    data: data
                  });

                case 6:
                  body = _context.sent;

                  if (body.data.code === 1) {
                    _this3.news[index].hadRead = true;
                  }

                case 8:
                  _this3.$preload('item', _this3.news[index]);
                  _this3.$navigate('chatPage');

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this3);
        }))();
      }
    }, _this.computed = {
      messageNum: function messageNum() {
        var num = 0;
        for (var i = 0; i < this.news.length; i++) {
          if (!this.news[i].hadRead) {
            num++;
          }
        }
        return num > 99 ? '99+' : num;
      },
      myactivitys: function myactivitys() {
        var _this4 = this;

        var arr = [];
        this.activityList.forEach(function (value, index) {
          if (value.author === _this4.session) {
            arr.push({
              oldIndex: index,
              value: value
            });
          }
        });
        return arr;
      },
      hasNews: function hasNews() {
        return this.news.length === 0;
      }
    }, _this.events = {
      deleteMyActivity: function deleteMyActivity(index, event) {
        _this.activityList.splice(parseInt(index), 1);
        _this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(index, [{
    key: 'loadActivityData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var header, body;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                header = {};

                header['session'] = this.session;

                if (!this.end) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt('return');

              case 5:
                _context2.next = 7;
                return _wepy2.default.request({
                  url: _config.api.activity.list.url,
                  method: _config.api.activity.list.method,
                  header: header,
                  data: { page: this.activityPage }
                });

              case 7:
                body = _context2.sent;

                if (body.data.code === 1) {
                  this.activityList = body.data.data;
                  this.end = body.data.end;
                  this.activityPage++;
                  this.$apply();
                } else {
                  _wepy2.default.showModal({
                    title: '提示',
                    content: '获取列表失败'
                  });
                }
                _context2.next = 13;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](0);

              case 13:
                _wepy2.default.stopPullDownRefresh();

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function loadActivityData() {
        return _ref2.apply(this, arguments);
      }

      return loadActivityData;
    }()
  }, {
    key: 'loadmoreData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var header, body, _activityList;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                header = {};

                header['session'] = this.session;

                if (!this.end) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt('return');

              case 5:
                _context3.next = 7;
                return _wepy2.default.request({
                  url: _config.api.activity.list.url,
                  method: _config.api.activity.list.method,
                  header: header,
                  data: { page: this.activityPage }
                });

              case 7:
                body = _context3.sent;

                if (body.data.code === 1) {
                  (_activityList = this.activityList).push.apply(_activityList, _toConsumableArray(body.data.data));
                  this.end = body.data.end;
                  this.loadMored = true;
                  this.activityPage++;
                  this.$apply();
                }
                _context3.next = 13;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3['catch'](0);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function loadmoreData() {
        return _ref3.apply(this, arguments);
      }

      return loadmoreData;
    }()

    /*
    * 请求加载消息数据
    *
    */

  }, {
    key: 'loadMessage',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var header, body;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                header = {};

                header['session'] = this.session;
                _context4.prev = 2;
                _context4.next = 5;
                return _wepy2.default.request({
                  url: _config.api.message.list.url,
                  method: _config.api.message.list.method,
                  header: header
                });

              case 5:
                body = _context4.sent;

                if (body.data.code === 1) {
                  this.news = body.data.data;
                  this.$apply();
                }
                _context4.next = 11;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4['catch'](2);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 9]]);
      }));

      function loadMessage() {
        return _ref4.apply(this, arguments);
      }

      return loadMessage;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var session, userData, _session;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _wepy2.default.checkSession();

              case 3:
                session = _context5.sent;

                if (!(session.errMsg !== 'checkSession:ok')) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 7;
                return _index2.default.login();

              case 7:
                _context5.next = 13;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5['catch'](0);
                _context5.next = 13;
                return _index2.default.login();

              case 13:
                _context5.prev = 13;
                userData = _wepy2.default.getStorageSync('_userinfo');

                this.userInfo = userData;
                this.$parent.globalData.userInfo = this.userInfo;
                _session = _wepy2.default.getStorageSync('_session');

                this.session = _session.split('<<')[0];
                this.$parent.globalData.openId = this.session;
                _context5.next = 22;
                return this.loadActivityData();

              case 22:
                _context5.next = 24;
                return this.loadMessage();

              case 24:
                _context5.next = 28;
                break;

              case 26:
                _context5.prev = 26;
                _context5.t1 = _context5['catch'](13);

              case 28:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9], [13, 26]]);
      }));

      function onLoad(_x) {
        return _ref5.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _newitem;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                try {
                  _newitem = _wepy2.default.getStorageSync('newitem');

                  if (_newitem !== '') {
                    this.activityList.unshift(_newitem);
                    this.myactivitys.unshift({
                      oldIndex: 0,
                      value: _newitem
                    });
                    _wepy2.default.removeStorageSync('newitem');
                  }
                } catch (e) {}
                this.$apply();

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onShow() {
        return _ref6.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'onPullDownRefresh',


    // 下拉刷新
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(this.showIndex !== 0)) {
                  _context7.next = 3;
                  break;
                }

                _wepy2.default.stopPullDownRefresh();
                return _context7.abrupt('return');

              case 3:
                this.activityPage = 1;
                this.end = false;
                _context7.next = 7;
                return this.loadActivityData();

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onPullDownRefresh() {
        return _ref7.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()

    // 下拉至底部

  }, {
    key: 'onReachBottom',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(this.showIndex !== 0 || !this.loadMored)) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt('return');

              case 2:
                this.loadMored = false;
                _context8.next = 5;
                return this.loadmoreData();

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onReachBottom() {
        return _ref8.apply(this, arguments);
      }

      return onReachBottom;
    }()
  }]);

  return index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaG93SW5kZXgiLCJ1c2VySW5mbyIsInNlc3Npb24iLCJteWFjdGl2aXR5cyIsImFjdGl2aXR5TGlzdCIsIm5ld3MiLCJhY3Rpdml0eVBhZ2UiLCJuZXdQYWdlIiwiZW5kIiwibG9hZE1vcmVkIiwibG9hZE1lc3NnZVRhc2siLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJhY3Rpdml0eSIsIm5ld2l0ZW0iLCJteWFjdGl2aXR5IiwibWV0aG9kcyIsImNoYW5nZVRhYiIsInBhcnNlSW50Iiwic2V0SW50ZXJ2YWwiLCJsb2FkTWVzc2FnZSIsImNsZWFySW50ZXJ2YWwiLCIkYXBwbHkiLCJvcGVuRGV0YWlsIiwiZXZlbnQiLCJpdGVtIiwiaXRlbUluZGV4IiwiJHByZWxvYWQiLCIkbmF2aWdhdGUiLCJvcGVuQ2hhdCIsImhlYWRlciIsIm1lc3NhZ2VJZCIsIl9pZCIsImhhZFJlYWQiLCJyZXF1ZXN0IiwidXJsIiwibWVzc2FnZSIsInJlYWQiLCJtZXRob2QiLCJib2R5IiwiY29kZSIsImNvbXB1dGVkIiwibWVzc2FnZU51bSIsIm51bSIsImkiLCJsZW5ndGgiLCJhcnIiLCJmb3JFYWNoIiwidmFsdWUiLCJhdXRob3IiLCJwdXNoIiwib2xkSW5kZXgiLCJoYXNOZXdzIiwiZXZlbnRzIiwiZGVsZXRlTXlBY3Rpdml0eSIsInNwbGljZSIsImxpc3QiLCJwYWdlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImNoZWNrU2Vzc2lvbiIsImVyck1zZyIsImxvZ2luIiwidXNlckRhdGEiLCJnZXRTdG9yYWdlU3luYyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiX3Nlc3Npb24iLCJzcGxpdCIsIm9wZW5JZCIsImxvYWRBY3Rpdml0eURhdGEiLCJ1bnNoaWZ0Iiwi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QUFLbkIsSTs7a0JBQW5CL0QsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IGFjdGl2aXR5IGZyb20gJy4uLy4vY29tcG9uZW50cy9hY3Rpdml0eSdcbiAgICBpbXBvcnQgbmV3aXRlbSBmcm9tICcuLi8uL2NvbXBvbmVudHMvbmV3SXRlbSdcbiAgICBpbXBvcnQgbXlhY3Rpdml0eSBmcm9tICcuLi8uL2NvbXBvbmVudHMvbXlhY3Rpdml0eSdcbiAgICBpbXBvcnQgaW50ZXJmYWNlcyBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuICAgIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmoKHlm63mtLvliqjlub/lnLonXG4gICAgICB9XG4gICAgICBkYXRhID0ge1xuICAgICAgICBzaG93SW5kZXg6IDAsXG4gICAgICAgIHVzZXJJbmZvOiAnJyxcbiAgICAgICAgc2Vzc2lvbjogJycsXG4gICAgICAgIG15YWN0aXZpdHlzOiBbXSxcbiAgICAgICAgYWN0aXZpdHlMaXN0OiBbXSxcbiAgICAgICAgbmV3czogW10sXG4gICAgICAgIGFjdGl2aXR5UGFnZTogMSxcbiAgICAgICAgbmV3UGFnZTogMSxcbiAgICAgICAgZW5kOiBmYWxzZSxcbiAgICAgICAgbG9hZE1vcmVkOiB0cnVlLFxuICAgICAgICBsb2FkTWVzc2dlVGFzazogbnVsbFxuICAgICAgfVxuICAgICAkcmVwZWF0ID0ge1wiYWN0aXZpdHlMaXN0XCI6e1wiY29tXCI6XCJhY3Rpdml0eVwiLFwicHJvcHNcIjpcImRhdGFJdGVtXCJ9LFwibmV3c1wiOntcImNvbVwiOlwibmV3aXRlbVwiLFwicHJvcHNcIjpcIm5ld0l0ZW0uc3luY1wifSxcIm15YWN0aXZpdHlzXCI6e1wiY29tXCI6XCJteWFjdGl2aXR5XCIsXCJwcm9wc1wiOlwiaXRlbS5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiYWN0aXZpdHlcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImFjdGl2aXR5TGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmRhdGFJdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJhY3Rpdml0eUxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJuZXdpdGVtXCI6e1widi1iaW5kOm5ld0l0ZW0uc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm5ld3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppdGVtcy5zeW5jXCI6e1widmFsdWVcIjpcIm5ld3NcIixcImZvclwiOlwibmV3c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcIm5ld3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJteWFjdGl2aXR5XCI6e1widi1iaW5kOml0ZW0uc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm15YWN0aXZpdHlzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmFjdGl2aXR5cy5zeW5jXCI6e1widmFsdWVcIjpcIm15YWN0aXZpdHlzXCIsXCJmb3JcIjpcIm15YWN0aXZpdHlzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmluZGV4Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcIm15YWN0aXZpdHlzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIGFjdGl2aXR5OiBhY3Rpdml0eSxcbiAgICAgICAgbmV3aXRlbTogbmV3aXRlbSxcbiAgICAgICAgbXlhY3Rpdml0eTogbXlhY3Rpdml0eVxuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgKiAg5pWw5o2u6K+35rGCXG4gICAgICAqICDmtLvliqjliJfooagg5raI5oGv5pWw5o2uXG4gICAgICAqL1xuICAgICAgYXN5bmMgbG9hZEFjdGl2aXR5RGF0YSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgaGVhZGVyID0ge31cbiAgICAgICAgICBoZWFkZXJbJ3Nlc3Npb24nXSA9IHRoaXMuc2Vzc2lvblxuICAgICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBhcGkuYWN0aXZpdHkubGlzdC51cmwsXG4gICAgICAgICAgICBtZXRob2Q6IGFwaS5hY3Rpdml0eS5saXN0Lm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgZGF0YToge3BhZ2U6IHRoaXMuYWN0aXZpdHlQYWdlfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGJvZHkuZGF0YS5jb2RlID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5TGlzdCA9IGJvZHkuZGF0YS5kYXRhXG4gICAgICAgICAgICB0aGlzLmVuZCA9IGJvZHkuZGF0YS5lbmRcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlQYWdlICsrXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICBjb250ZW50OiAn6I635Y+W5YiX6KGo5aSx6LSlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgfVxuICAgICAgYXN5bmMgbG9hZG1vcmVEYXRhKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBoZWFkZXIgPSB7fVxuICAgICAgICAgIGhlYWRlclsnc2Vzc2lvbiddID0gdGhpcy5zZXNzaW9uXG4gICAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGFwaS5hY3Rpdml0eS5saXN0LnVybCxcbiAgICAgICAgICAgIG1ldGhvZDogYXBpLmFjdGl2aXR5Lmxpc3QubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgICAgICBkYXRhOiB7cGFnZTogdGhpcy5hY3Rpdml0eVBhZ2V9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoYm9keS5kYXRhLmNvZGUgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlMaXN0LnB1c2goLi4uYm9keS5kYXRhLmRhdGEpXG4gICAgICAgICAgICB0aGlzLmVuZCA9IGJvZHkuZGF0YS5lbmRcbiAgICAgICAgICAgIHRoaXMubG9hZE1vcmVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVBhZ2UrK1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAqIOivt+axguWKoOi9vea2iOaBr+aVsOaNrlxuICAgICAgKlxuICAgICAgKi9cbiAgICAgIGFzeW5jIGxvYWRNZXNzYWdlKCkge1xuICAgICAgICBsZXQgaGVhZGVyID0ge31cbiAgICAgICAgaGVhZGVyWydzZXNzaW9uJ10gPSB0aGlzLnNlc3Npb25cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogYXBpLm1lc3NhZ2UubGlzdC51cmwsXG4gICAgICAgICAgICBtZXRob2Q6IGFwaS5tZXNzYWdlLmxpc3QubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChib2R5LmRhdGEuY29kZSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5uZXdzID0gYm9keS5kYXRhLmRhdGFcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXN5bmMgb25Mb2FkKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgc2Vzc2lvbiA9IGF3YWl0IHdlcHkuY2hlY2tTZXNzaW9uKClcbiAgICAgICAgICBpZiAoc2Vzc2lvbi5lcnJNc2cgIT09ICdjaGVja1Nlc3Npb246b2snKSB7XG4gICAgICAgICAgICBhd2FpdCBpbnRlcmZhY2VzLmxvZ2luKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBhd2FpdCBpbnRlcmZhY2VzLmxvZ2luKClcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCB1c2VyRGF0YSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ191c2VyaW5mbycpXG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJEYXRhXG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPSB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgbGV0IF9zZXNzaW9uID0gd2VweS5nZXRTdG9yYWdlU3luYygnX3Nlc3Npb24nKVxuICAgICAgICAgIHRoaXMuc2Vzc2lvbiA9IF9zZXNzaW9uLnNwbGl0KCc8PCcpWzBdXG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkID0gdGhpcy5zZXNzaW9uXG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2FkQWN0aXZpdHlEYXRhKClcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRNZXNzYWdlKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhc3luYyBvblNob3coKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG5ld2l0ZW0gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCduZXdpdGVtJylcbiAgICAgICAgICBpZiAobmV3aXRlbSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlMaXN0LnVuc2hpZnQobmV3aXRlbSlcbiAgICAgICAgICAgIHRoaXMubXlhY3Rpdml0eXMudW5zaGlmdCh7XG4gICAgICAgICAgICAgIG9sZEluZGV4OiAwLFxuICAgICAgICAgICAgICB2YWx1ZTogbmV3aXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdlcHkucmVtb3ZlU3RvcmFnZVN5bmMoJ25ld2l0ZW0nKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGNoYW5nZVRhYihpbmRleCkge1xuICAgICAgICAgIHRoaXMuc2hvd0luZGV4ID0gcGFyc2VJbnQoaW5kZXgpXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0luZGV4ID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRNZXNzZ2VUYXNrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRNZXNzYWdlKClcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvYWRNZXNzZ2VUYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubG9hZE1lc3NnZVRhc2spXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkRldGFpbChpbmRleCwgZXZlbnQpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuYWN0aXZpdHlMaXN0W2luZGV4XSxcbiAgICAgICAgICAgIGl0ZW1JbmRleDogaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kcHJlbG9hZCgnZGF0YScsIGRhdGEpXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ2FjdGl2aXR5RGV0YWlsJylcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgb3BlbkNoYXQoaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaGVhZGVyID0ge31cbiAgICAgICAgICBoZWFkZXJbJ3Nlc3Npb24nXSA9IHRoaXMuc2Vzc2lvblxuICAgICAgICAgIGxldCBkYXRhID0ge21lc3NhZ2VJZDogdGhpcy5uZXdzW2luZGV4XS5faWR9XG4gICAgICAgICAgaWYgKCF0aGlzLm5ld3NbaW5kZXhdLmhhZFJlYWQpIHtcbiAgICAgICAgICAgIC8vIOWPkei1t+ivt+axgiDmoIforrDor6Xmtojmga/kuLrlt7Lor7tcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6IGFwaS5tZXNzYWdlLnJlYWQudXJsLFxuICAgICAgICAgICAgICBtZXRob2Q6IGFwaS5tZXNzYWdlLnJlYWQubWV0aG9kLFxuICAgICAgICAgICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChib2R5LmRhdGEuY29kZSA9PT0gMSkge1xuICAgICAgICAgICAgICB0aGlzLm5ld3NbaW5kZXhdLmhhZFJlYWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJHByZWxvYWQoJ2l0ZW0nLCB0aGlzLm5ld3NbaW5kZXhdKVxuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCdjaGF0UGFnZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBtZXNzYWdlTnVtKCkge1xuICAgICAgICAgIGxldCBudW0gPSAwXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5ld3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5uZXdzW2ldLmhhZFJlYWQpIHtcbiAgICAgICAgICAgICAgbnVtKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bSA+IDk5ID8gJzk5KycgOiBudW1cbiAgICAgICAgfSxcbiAgICAgICAgbXlhY3Rpdml0eXMoKSB7XG4gICAgICAgICAgbGV0IGFyciA9IFtdXG4gICAgICAgICAgdGhpcy5hY3Rpdml0eUxpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUuYXV0aG9yID09PSB0aGlzLnNlc3Npb24pIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIG9sZEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTmV3cygpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5uZXdzLmxlbmd0aCA9PT0gMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOS4i+aLieWIt+aWsFxuICAgICAgYXN5bmMgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dJbmRleCAhPT0gMCkge1xuICAgICAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpdml0eVBhZ2UgPSAxXG4gICAgICAgIHRoaXMuZW5kID0gZmFsc2VcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkQWN0aXZpdHlEYXRhKClcbiAgICAgIH1cblxuICAgICAgLy8g5LiL5ouJ6Iez5bqV6YOoXG4gICAgICBhc3luYyBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93SW5kZXggIT09IDAgfHwgIXRoaXMubG9hZE1vcmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkTW9yZWQgPSBmYWxzZVxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRtb3JlRGF0YSgpXG4gICAgICB9XG4gICAgICBldmVudHMgPSB7XG4gICAgICAgIGRlbGV0ZU15QWN0aXZpdHk6IChpbmRleCwgZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2aXR5TGlzdC5zcGxpY2UocGFyc2VJbnQoaW5kZXgpLCAxKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgfVxuIl19