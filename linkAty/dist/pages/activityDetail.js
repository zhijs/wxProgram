'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detail = function (_wepy$page) {
  _inherits(detail, _wepy$page);

  function detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = detail.__proto__ || Object.getPrototypeOf(detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '活动详情'
    }, _this.data = {
      activityObj: '',
      you_liked: false,
      dateTime: '',
      partContent: '',
      sessionIndex: '',
      objIndex: '',
      session: '', // 用户标识符
      joined: false, // 是否参加
      requested: false // 是否报名
    }, _this.methods = {
      liked: function liked(type) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var header, data, page, key;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (type === 'cancel') {
                    _this2.activityObj.likedUser.splice(_this2.sessionIndex, 1);
                  } else {
                    _this2.activityObj.likedUser.push(_this2.session);
                  }
                  _this2.you_liked = !_this2.you_liked;
                  _context.prev = 2;
                  header = {};

                  header['content-type'] = 'application/json';
                  header['session'] = _this2.session;
                  _context.next = 8;
                  return _wepy2.default.request({
                    url: _config.api.activity.likedUserUpdate.url,
                    method: _config.api.activity.likedUserUpdate.method,
                    data: {
                      id: _this2.activityObj._id,
                      userList: _this2.activityObj.likedUser
                    },
                    header: header
                  });

                case 8:
                  data = _context.sent;

                  // 提交后修改页面数据
                  if (data.data.code === 1) {
                    page = _this2.getCurrentPages();
                    key = 'activityList[' + _this2.objIndex + '].likedUser';

                    page[0].setData(_defineProperty({}, key, _this2.activityObj.likedUser));
                    _this2.$apply();
                  } else {
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '网络错误'
                    });
                  }
                  _context.next = 14;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](2);

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[2, 12]]);
        }))();
      },
      openLocation: function openLocation() {
        var that = this;
        _wepy2.default.openLocation({
          latitude: that.activityObj.location.latitude,
          longitude: that.activityObj.location.longitude,
          name: that.activityObj.location.name,
          address: that.activityObj.location.name,
          success: function success() {},
          fail: function fail() {
            _wepy2.default.showModal({
              title: '提示',
              content: '位置获取出错'
            });
          },
          complete: function complete() {}
        });
      },
      openContent: function openContent() {
        this.$preload('content', this.activityObj.content);
        this.$navigate('activityIntroduce');
      },
      joinActivity: function joinActivity() {
        this.$preload('activityObj', this.activityObj);
        this.$navigate('joinPage');
      }
    }, _this.computed = {
      isOwner: function isOwner() {
        return this.session === this.activityObj.author;
      },
      posterPath: function posterPath() {
        return this.activityObj.posterPath !== '' ? this.activityObj.posterPath : '../assets/svgs/avatar/test.jpg';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(detail, [{
    key: 'onLoad',
    value: function onLoad(param, data) {
      this.session = this.$parent.globalData.openId;
      var dataObj = data.preload.data.item;
      this.activityObj = dataObj;
      var maxLen = Math.max(this.activityObj.likedUser.length, this.activityObj.joinedUser.length, this.activityObj.requestJoinUser.length);

      // 保存各个数组原先的长度
      var likeLen = this.activityObj.likedUser.length;
      var joinedLen = this.activityObj.joinedUser.length;
      var requestedLen = this.activityObj.requestJoinUser.length;

      // 统一各个数组的长度
      this.activityObj.likedUser.length = maxLen;
      this.activityObj.joinedUser.length = maxLen;
      this.activityObj.requestJoinUser.length = maxLen;
      this.objIndex = data.preload.data.itemIndex;
      var startStr = dataObj.date.start;
      var endStr = dataObj.date.end;
      this.partContent = dataObj.content.contentText.substring(0, 20);
      if (startStr.substring(0, 10) === endStr.substring(0, 10)) {
        this.dateTime = startStr.substring(5, 7) + '月' + startStr.substring(8, 10) + '日 ' + startStr.substring(11) + '-' + endStr.substring(11);
      } else {
        this.dateTime = startStr.substring(5, 7) + '月' + startStr.substring(8, 10) + '日 ' + startStr.substring(11) + '-' + endStr.substring(5, 7) + '月' + endStr.substring(8, 10) + '日 ' + endStr.substring(11);
      }
      for (var i = 0; i < maxLen; i++) {
        if (this.activityObj.likedUser[i] === this.session) {
          this.you_liked = true;
          this.sessionIndex = i;
        }
        if (this.activityObj.joinedUser[i] === this.session) {
          this.joined = true;
        }
        if (this.activityObj.requestJoinUser[i] === this.session) {
          this.requested = true;
        }
      }

      // 回置各个数组的长度
      this.activityObj.likedUser.length = likeLen;
      this.activityObj.joinedUser.length = joinedLen;
      this.activityObj.requestJoinUser.length = requestedLen;
      this.$apply();
    }
  }]);

  return detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(detail , 'pages/activityDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5RGV0YWlsLmpzIl0sIm5hbWVzIjpbImRldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWN0aXZpdHlPYmoiLCJ5b3VfbGlrZWQiLCJkYXRlVGltZSIsInBhcnRDb250ZW50Iiwic2Vzc2lvbkluZGV4Iiwib2JqSW5kZXgiLCJzZXNzaW9uIiwiam9pbmVkIiwicmVxdWVzdGVkIiwibWV0aG9kcyIsImxpa2VkIiwidHlwZSIsImxpa2VkVXNlciIsInNwbGljZSIsInB1c2giLCJoZWFkZXIiLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZpdHkiLCJsaWtlZFVzZXJVcGRhdGUiLCJtZXRob2QiLCJpZCIsIl9pZCIsInVzZXJMaXN0IiwiY29kZSIsInBhZ2UiLCJnZXRDdXJyZW50UGFnZXMiLCJrZXkiLCJzZXREYXRhIiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwib3BlbkxvY2F0aW9uIiwidGhhdCIsImxhdGl0dWRlIiwibG9jYXRpb24iLCJsb25naXR1ZGUiLCJuYW1lIiwiYWRkcmVzcyIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJvcGVuQ29udGVudCIsIiRwcmVsb2FkIiwiJG5hdmlnYXRlIiwiam9pbkFjdGl2aXR5IiwiY29tcHV0ZWQiLCJpc093bmVyIiwiYXV0aG9yIiwicG9zdGVyUGF0aCIsInBhcmFtIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJvcGVuSWQiLCJkYXRhT2JqIiwicHJlbG9hZCIsIml0ZW0iLCJtYXhMZW4iLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiam9pbmVkVXNlciIsInJlcXVlc3RKb2luVXNlciIsImxpa2VMZW4iLCJqb2luZWRMZW4iLCJyZXF1ZXN0ZWRMZW4iLCJpdGVtSW5kZXgiLCJzdGFydFN0ciIsImRhdGUiLCJzdGFydCIsImVuZFN0ciIsImVuZCIsImNvbnRlbnRUZXh0Iiwic3Vic3RyaW5nIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7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c291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtLvliqjor6bmg4UnXHJcbiAgICAgIH1cclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICBhY3Rpdml0eU9iajogJycsXHJcbiAgICAgICAgeW91X2xpa2VkOiBmYWxzZSxcclxuICAgICAgICBkYXRlVGltZTogJycsXHJcbiAgICAgICAgcGFydENvbnRlbnQ6ICcnLFxyXG4gICAgICAgIHNlc3Npb25JbmRleDogJycsXHJcbiAgICAgICAgb2JqSW5kZXg6ICcnLFxyXG4gICAgICAgIHNlc3Npb246ICcnLCAvLyDnlKjmiLfmoIfor4bnrKZcclxuICAgICAgICBqb2luZWQ6IGZhbHNlLCAvLyDmmK/lkKblj4LliqBcclxuICAgICAgICByZXF1ZXN0ZWQ6IGZhbHNlIC8vIOaYr+WQpuaKpeWQjVxyXG4gICAgICB9XHJcbiAgICAgIG9uTG9hZChwYXJhbSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZFxyXG4gICAgICAgIGxldCBkYXRhT2JqID0gZGF0YS5wcmVsb2FkLmRhdGEuaXRlbVxyXG4gICAgICAgIHRoaXMuYWN0aXZpdHlPYmogPSBkYXRhT2JqXHJcbiAgICAgICAgbGV0IG1heExlbiA9IE1hdGgubWF4KHRoaXMuYWN0aXZpdHlPYmoubGlrZWRVc2VyLmxlbmd0aCwgdGhpcy5hY3Rpdml0eU9iai5qb2luZWRVc2VyLmxlbmd0aCwgdGhpcy5hY3Rpdml0eU9iai5yZXF1ZXN0Sm9pblVzZXIubGVuZ3RoKVxyXG5cclxuICAgICAgICAvLyDkv53lrZjlkITkuKrmlbDnu4Tljp/lhYjnmoTplb/luqZcclxuICAgICAgICBsZXQgbGlrZUxlbiA9IHRoaXMuYWN0aXZpdHlPYmoubGlrZWRVc2VyLmxlbmd0aFxyXG4gICAgICAgIGxldCBqb2luZWRMZW4gPSB0aGlzLmFjdGl2aXR5T2JqLmpvaW5lZFVzZXIubGVuZ3RoXHJcbiAgICAgICAgbGV0IHJlcXVlc3RlZExlbiA9IHRoaXMuYWN0aXZpdHlPYmoucmVxdWVzdEpvaW5Vc2VyLmxlbmd0aFxyXG5cclxuICAgICAgICAvLyDnu5/kuIDlkITkuKrmlbDnu4TnmoTplb/luqZcclxuICAgICAgICB0aGlzLmFjdGl2aXR5T2JqLmxpa2VkVXNlci5sZW5ndGggPSBtYXhMZW5cclxuICAgICAgICB0aGlzLmFjdGl2aXR5T2JqLmpvaW5lZFVzZXIubGVuZ3RoID0gbWF4TGVuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0eU9iai5yZXF1ZXN0Sm9pblVzZXIubGVuZ3RoID0gbWF4TGVuXHJcbiAgICAgICAgdGhpcy5vYmpJbmRleCA9IGRhdGEucHJlbG9hZC5kYXRhLml0ZW1JbmRleFxyXG4gICAgICAgIGxldCBzdGFydFN0ciA9IGRhdGFPYmouZGF0ZS5zdGFydFxyXG4gICAgICAgIGxldCBlbmRTdHIgPSBkYXRhT2JqLmRhdGUuZW5kXHJcbiAgICAgICAgdGhpcy5wYXJ0Q29udGVudCA9IGRhdGFPYmouY29udGVudC5jb250ZW50VGV4dC5zdWJzdHJpbmcoMCwgMjApXHJcbiAgICAgICAgaWYgKHN0YXJ0U3RyLnN1YnN0cmluZygwLCAxMCkgPT09IGVuZFN0ci5zdWJzdHJpbmcoMCwgMTApKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGVUaW1lID0gc3RhcnRTdHIuc3Vic3RyaW5nKDUsIDcpICsgJ+aciCcgKyBzdGFydFN0ci5zdWJzdHJpbmcoOCwgMTApICsgJ+aXpSAnICsgc3RhcnRTdHIuc3Vic3RyaW5nKDExKSArICctJyArIGVuZFN0ci5zdWJzdHJpbmcoMTEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGF0ZVRpbWUgPSBzdGFydFN0ci5zdWJzdHJpbmcoNSwgNykgKyAn5pyIJyArIHN0YXJ0U3RyLnN1YnN0cmluZyg4LCAxMCkgKyAn5pelICcgKyBzdGFydFN0ci5zdWJzdHJpbmcoMTEpICsgJy0nICsgZW5kU3RyLnN1YnN0cmluZyg1LCA3KSArICfmnIgnICsgZW5kU3RyLnN1YnN0cmluZyg4LCAxMCkgKyAn5pelICcgKyBlbmRTdHIuc3Vic3RyaW5nKDExKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heExlbjsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3Rpdml0eU9iai5saWtlZFVzZXJbaV0gPT09IHRoaXMuc2Vzc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLnlvdV9saWtlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uSW5kZXggPSBpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3Rpdml0eU9iai5qb2luZWRVc2VyW2ldID09PSB0aGlzLnNlc3Npb24pIHtcclxuICAgICAgICAgICAgdGhpcy5qb2luZWQgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3Rpdml0eU9iai5yZXF1ZXN0Sm9pblVzZXJbaV0gPT09IHRoaXMuc2Vzc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RlZCA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWbnue9ruWQhOS4quaVsOe7hOeahOmVv+W6plxyXG4gICAgICAgIHRoaXMuYWN0aXZpdHlPYmoubGlrZWRVc2VyLmxlbmd0aCA9IGxpa2VMZW5cclxuICAgICAgICB0aGlzLmFjdGl2aXR5T2JqLmpvaW5lZFVzZXIubGVuZ3RoID0gam9pbmVkTGVuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0eU9iai5yZXF1ZXN0Sm9pblVzZXIubGVuZ3RoID0gcmVxdWVzdGVkTGVuXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9XHJcbiAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgYXN5bmMgbGlrZWQodHlwZSkge1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYmoubGlrZWRVc2VyLnNwbGljZSh0aGlzLnNlc3Npb25JbmRleCwgMSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYmoubGlrZWRVc2VyLnB1c2godGhpcy5zZXNzaW9uKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy55b3VfbGlrZWQgPSAhdGhpcy55b3VfbGlrZWRcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7fVxyXG4gICAgICAgICAgICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIGhlYWRlclsnc2Vzc2lvbiddID0gdGhpcy5zZXNzaW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogYXBpLmFjdGl2aXR5Lmxpa2VkVXNlclVwZGF0ZS51cmwsXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBhcGkuYWN0aXZpdHkubGlrZWRVc2VyVXBkYXRlLm1ldGhvZCxcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5hY3Rpdml0eU9iai5faWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyTGlzdDogdGhpcy5hY3Rpdml0eU9iai5saWtlZFVzZXJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIOaPkOS6pOWQjuS/ruaUuemhtemdouaVsOaNrlxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VzKClcclxuICAgICAgICAgICAgICBsZXQga2V5ID0gJ2FjdGl2aXR5TGlzdFsnICsgdGhpcy5vYmpJbmRleCArICddLmxpa2VkVXNlcidcclxuICAgICAgICAgICAgICBwYWdlWzBdLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgW2tleV06IHRoaXMuYWN0aXZpdHlPYmoubGlrZWRVc2VyXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+e9kee7nOmUmeivrydcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuTG9jYXRpb24oKSB7XHJcbiAgICAgICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgICAgIHdlcHkub3BlbkxvY2F0aW9uKHtcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IHRoYXQuYWN0aXZpdHlPYmoubG9jYXRpb24ubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogdGhhdC5hY3Rpdml0eU9iai5sb2NhdGlvbi5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoYXQuYWN0aXZpdHlPYmoubG9jYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogdGhhdC5hY3Rpdml0eU9iai5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5L2N572u6I635Y+W5Ye66ZSZJ1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuQ29udGVudCgpIHtcclxuICAgICAgICAgIHRoaXMuJHByZWxvYWQoJ2NvbnRlbnQnLCB0aGlzLmFjdGl2aXR5T2JqLmNvbnRlbnQpXHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnYWN0aXZpdHlJbnRyb2R1Y2UnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgam9pbkFjdGl2aXR5KCkge1xyXG4gICAgICAgICAgdGhpcy4kcHJlbG9hZCgnYWN0aXZpdHlPYmonLCB0aGlzLmFjdGl2aXR5T2JqKVxyXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ2pvaW5QYWdlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgaXNPd25lcigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNlc3Npb24gPT09IHRoaXMuYWN0aXZpdHlPYmouYXV0aG9yXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3N0ZXJQYXRoKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlPYmoucG9zdGVyUGF0aCAhPT0gJycgPyB0aGlzLmFjdGl2aXR5T2JqLnBvc3RlclBhdGggOiAnLi4vYXNzZXRzL3N2Z3MvYXZhdGFyL3Rlc3QuanBnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4iXX0=