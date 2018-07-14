'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _datetime = require('./../components/datetime.js');

var _datetime2 = _interopRequireDefault(_datetime);

var _index = require('./../interfaces/index.js');

var _index2 = _interopRequireDefault(_index);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var neweActivity = function (_wepy$page) {
  _inherits(neweActivity, _wepy$page);

  function neweActivity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, neweActivity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = neweActivity.__proto__ || Object.getPrototypeOf(neweActivity)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "datetime": { "xmlns:v-bind": "", "v-bind:dateObj.sync": "dateObj" } }, _this.$events = {}, _this.components = {
      datetime: _datetime2.default
    }, _this.data = {
      poster: '',
      contentImgs: [],
      posterPath: '',
      title: '',
      session: '',
      isInitShow: true,
      startDateTime: '请选择开始时间',
      endSelected: '',
      startSelected: '',
      contentSelectd: '',
      endDateTime: '请选择结束时间',
      location: {
        name: '地点选择',
        latitude: '',
        longitude: ''
      },
      localSelected: false,
      contentEdited: false,
      content: {
        imagesPath: [],
        contentText: '活动介绍'
      },
      activityObj: {
        activityTypeIndex: null,
        typeSelected: '',
        selectedState: false,
        activityShow: false,
        activities: [{ name: '体育运动', selected: false }, { name: '讲座会议', selected: false }, { name: '户外活动', selected: false }, { name: '班级活动', selected: false }, { name: '社团活动', selected: false }, { name: '其他', selected: false }]
      },
      dateObj: {
        type: null,
        flag: false
      }
    }, _this.config = {
      navigationBarTitleText: '活动发布'
    }, _this.methods = {
      /*
      * 选择海报
      *
      */
      upLoadPoster: function upLoadPoster() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref2, tempFilePaths;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 1,
                    sizeType: 'compressed'
                  });

                case 2:
                  _ref2 = _context.sent;
                  tempFilePaths = _ref2.tempFilePaths;

                  _this2.poster = tempFilePaths[0];
                  _this2.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      openTimeSelect: function openTimeSelect(type) {
        this.dateObj.flag = !this.dateObj.flag;
        if (!this.dateObj.flag) {
          return;
        }
        this.dateObj.type = type;
      },
      chooseLocation: function chooseLocation() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref3, name, latitude, longitude;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _wepy2.default.chooseLocation();

                case 3:
                  _ref3 = _context2.sent;
                  name = _ref3.name;
                  latitude = _ref3.latitude;
                  longitude = _ref3.longitude;

                  _this3.location.name = name;
                  _this3.location.latitude = latitude;
                  _this3.location.longitude = longitude;
                  _this3.localSelected = true;
                  _this3.$apply();
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2['catch'](0);

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '位置获取出错'
                  });

                case 17:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 14]]);
        }))();
      },
      openType: function openType(index) {
        this.activityObj.activityShow = !this.activityObj.activityShow;
        if (!this.activityObj.activityShow && this.activityObj.activityTypeIndex !== null) {
          this.activityObj.typeSelected = this.activityObj.activities[this.activityObj.activityTypeIndex].name;
          this.activityObj.selectedState = true;
        }
      },
      selectType: function selectType(index) {
        if (this.activityObj.activityTypeIndex === null) {
          this.activityObj.activityTypeIndex = index;
        } else {
          this.activityObj.activities[this.activityObj.activityTypeIndex].selected = false;
        }
        this.activityObj.activityTypeIndex = index;
        this.activityObj.activities[index].selected = true;
      },
      editActivityContent: function editActivityContent() {
        this.$preload('content', this.content);
        this.$navigate('activityContent');
      },
      editTitle: function editTitle(e) {
        this.title = e.detail.value;
        this.$apply();
      },

      // 活动发布函数
      publish: function publish() {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var activityData, i, header, data;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(new Date(_this4.endDateTime) - new Date(_this4.startDateTime) < 0)) {
                    _context3.next = 3;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '开始时间不能大于结束时间'
                  });
                  return _context3.abrupt('return');

                case 3:
                  activityData = {};

                  _this4.session = _this4.$parent.globalData.openId;
                  activityData.author = _this4.session;

                  if (!(_this4.endDateTime === '请选择开始时间' || _this4.startDateTime === '请选择结束时间' || !_this4.contentEdited || !_this4.localSelected || !_this4.activityObj.selectedState || _this4.title === '')) {
                    _context3.next = 9;
                    break;
                  }

                  _wepy2.default.showModal({
                    title: '提示',
                    content: '请填写完整各项信息'
                  });
                  return _context3.abrupt('return');

                case 9:
                  activityData.type = _this4.activityObj.typeSelected;
                  activityData.date = {};
                  activityData.date.start = _this4.startDateTime;
                  activityData.date.end = _this4.endDateTime;
                  activityData.date.endTime = new Date(_this4.endDateTime).getTime();
                  activityData.location = _this4.location;
                  activityData.likedUser = [];
                  activityData.humanNum = 0;
                  activityData.title = _this4.title;
                  _wepy2.default.showLoading({
                    title: '正在发布, 请稍后',
                    mask: true
                  });

                  if (!(_this4.poster !== '')) {
                    _context3.next = 22;
                    break;
                  }

                  _context3.next = 22;
                  return _this4.upLoadImg(_this4.poster, 'poster');

                case 22:
                  if (!(_this4.content.imagesPath.length !== 0)) {
                    _context3.next = 30;
                    break;
                  }

                  i = 0;

                case 24:
                  if (!(i < _this4.content.imagesPath.length)) {
                    _context3.next = 30;
                    break;
                  }

                  _context3.next = 27;
                  return _this4.upLoadImg(_this4.content.imagesPath[i], 'content');

                case 27:
                  i++;
                  _context3.next = 24;
                  break;

                case 30:
                  activityData.content = {};
                  activityData.content.contentText = _this4.content.contentText;
                  activityData.content.imagesPath = _this4.contentImgs;
                  activityData.posterPath = _this4.posterPath;
                  header = {};

                  header['content-type'] = 'application/json';
                  header['session'] = _this4.session;
                  _context3.next = 39;
                  return _wepy2.default.request({
                    url: _config.api.activity.publish.url,
                    method: _config.api.activity.publish.method,
                    data: activityData,
                    header: header
                  });

                case 39:
                  data = _context3.sent;

                  if (data.data.code === 1) {
                    try {
                      _wepy2.default.setStorageSync('newitem', data.data.data);
                      _wepy2.default.navigateBack();
                    } catch (e) {}
                    _wepy2.default.hideLoading();
                  } else {
                    _wepy2.default.hideLoading();
                    _wepy2.default.showModal({
                      title: '提示',
                      content: '发布失败'
                    });
                  }

                case 41:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }))();
      }
    }, _this.events = {
      'selectedDate': function selectedDate(state, type, datetime, $event) {
        if (state === 'cancel') {
          return;
        }
        if (type === 'start') {
          _this.startDateTime = datetime;
          _this.startSelected = 'selected';
        } else {
          _this.endDateTime = datetime;
          _this.endSelected = 'selected';
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(neweActivity, [{
    key: 'onShow',
    value: function onShow() {
      try {
        var data = _wepy2.default.getStorageSync('_content');
        if (data === '') {
          this.content = {
            imagesPath: [],
            contentText: '活动介绍'
          };
          this.contentEdited = false;
        } else {
          this.content = data;
          this.contentEdited = true;
        }
        this.$apply();
      } catch (e) {}
    }
    /*
    *图片上传
    * path -- 图片路径数组
    * type -- 1.poster   2.contentImgs
    */

  }, {
    key: 'upLoadImg',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(paths, type) {
        var header, data, body;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                header = {};

                header['Content-Type'] = 'multipart/form-data';
                header['session'] = this.session;
                _context4.prev = 3;
                _context4.next = 6;
                return _wepy2.default.uploadFile({
                  url: _config.api.activity.upLoadImg.url,
                  filePath: paths,
                  name: 'image',
                  formData: {
                    type: type,
                    session: this.session
                  },
                  header: header
                });

              case 6:
                data = _context4.sent;
                body = JSON.parse(data.data);

                if (body.code === 1 && type === 'poster') {
                  this.posterPath = body.data;
                } else if (body.code === 1 && type === 'content') {
                  this.contentImgs.push(body.data);
                }
                this.$apply();
                _context4.next = 15;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](3);

                _wepy2.default.showModal({
                  title: '提示',
                  content: '图片上传出错'
                });

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 12]]);
      }));

      function upLoadImg(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return upLoadImg;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var session;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wepy2.default.checkSession();

              case 2:
                session = _context5.sent;

                try {
                  _wepy2.default.setStorageSync('_content', '');
                } catch (e) {}

                if (!(session.errMsg !== 'checkSession:ok')) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 7;
                return _index2.default.login();

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onLoad() {
        return _ref5.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return neweActivity;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(neweActivity , 'pages/newActivity'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld0FjdGl2aXR5LmpzIl0sIm5hbWVzIjpbIm5ld2VBY3Rpdml0eSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGV0aW1lIiwiZGF0YSIsInBvc3RlciIsImNvbnRlbnRJbWdzIiwicG9zdGVyUGF0aCIsInRpdGxlIiwic2Vzc2lvbiIsImlzSW5pdFNob3ciLCJzdGFydERhdGVUaW1lIiwiZW5kU2VsZWN0ZWQiLCJzdGFydFNlbGVjdGVkIiwiY29udGVudFNlbGVjdGQiLCJlbmREYXRlVGltZSIsImxvY2F0aW9uIiwibmFtZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibG9jYWxTZWxlY3RlZCIsImNvbnRlbnRFZGl0ZWQiLCJjb250ZW50IiwiaW1hZ2VzUGF0aCIsImNvbnRlbnRUZXh0IiwiYWN0aXZpdHlPYmoiLCJhY3Rpdml0eVR5cGVJbmRleCIsInR5cGVTZWxlY3RlZCIsInNlbGVjdGVkU3RhdGUiLCJhY3Rpdml0eVNob3ciLCJhY3Rpdml0aWVzIiwic2VsZWN0ZWQiLCJkYXRlT2JqIiwidHlwZSIsImZsYWciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibWV0aG9kcyIsInVwTG9hZFBvc3RlciIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCIkYXBwbHkiLCJvcGVuVGltZVNlbGVjdCIsImNob29zZUxvY2F0aW9uIiwic2hvd01vZGFsIiwib3BlblR5cGUiLCJpbmRleCIsInNlbGVjdFR5cGUiLCJlZGl0QWN0aXZpdHlDb250ZW50IiwiJHByZWxvYWQiLCIkbmF2aWdhdGUiLCJlZGl0VGl0bGUiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwdWJsaXNoIiwiRGF0ZSIsImFjdGl2aXR5RGF0YSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwib3BlbklkIiwiYXV0aG9yIiwiZGF0ZSIsInN0YXJ0IiwiZW5kIiwiZW5kVGltZSIsImdldFRpbWUiLCJsaWtlZFVzZXIiLCJodW1hbk51bSIsInNob3dMb2FkaW5nIiwibWFzayIsInVwTG9hZEltZyIsImxlbmd0aCIsImkiLCJoZWFkZXIiLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZpdHkiLCJtZXRob2QiLCJjb2RlIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZUJhY2siLCJoaWRlTG9hZGluZyIsImV2ZW50cyIsInN0YXRlIiwiJGV2ZW50IiwiZ2V0U3RvcmFnZVN5bmMiLCJwYXRocyIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJjaGVja1Nlc3Npb24iLCJlcnJNc2ciLCJsb2dpbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsbUJBQWEsRUFGUjtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsa0JBQVksSUFOUDtBQU9MQyxxQkFBZSxTQVBWO0FBUUxDLG1CQUFhLEVBUlI7QUFTTEMscUJBQWUsRUFUVjtBQVVMQyxzQkFBZ0IsRUFWWDtBQVdMQyxtQkFBYSxTQVhSO0FBWUxDLGdCQUFVO0FBQ1JDLGNBQU0sTUFERTtBQUVSQyxrQkFBVSxFQUZGO0FBR1JDLG1CQUFXO0FBSEgsT0FaTDtBQWlCTEMscUJBQWUsS0FqQlY7QUFrQkxDLHFCQUFlLEtBbEJWO0FBbUJMQyxlQUFTO0FBQ1BDLG9CQUFZLEVBREw7QUFFUEMscUJBQWE7QUFGTixPQW5CSjtBQXVCTEMsbUJBQWE7QUFDWEMsMkJB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QUExQnRHLFkiLCJmaWxlIjoibmV3QWN0aXZpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBkYXRldGltZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGV0aW1lJ1xyXG4gIGltcG9ydCBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXHJcbiAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG5ld2VBY3Rpdml0eSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZGF0ZXRpbWVcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmRhdGVPYmouc3luY1wiOlwiZGF0ZU9ialwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGRhdGV0aW1lOiBkYXRldGltZVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcG9zdGVyOiAnJyxcclxuICAgICAgY29udGVudEltZ3M6IFtdLFxyXG4gICAgICBwb3N0ZXJQYXRoOiAnJyxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBzZXNzaW9uOiAnJyxcclxuICAgICAgaXNJbml0U2hvdzogdHJ1ZSxcclxuICAgICAgc3RhcnREYXRlVGltZTogJ+ivt+mAieaLqeW8gOWni+aXtumXtCcsXHJcbiAgICAgIGVuZFNlbGVjdGVkOiAnJyxcclxuICAgICAgc3RhcnRTZWxlY3RlZDogJycsXHJcbiAgICAgIGNvbnRlbnRTZWxlY3RkOiAnJyxcclxuICAgICAgZW5kRGF0ZVRpbWU6ICfor7fpgInmi6nnu5PmnZ/ml7bpl7QnLFxyXG4gICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgIG5hbWU6ICflnLDngrnpgInmi6knLFxyXG4gICAgICAgIGxhdGl0dWRlOiAnJyxcclxuICAgICAgICBsb25naXR1ZGU6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2FsU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICBjb250ZW50RWRpdGVkOiBmYWxzZSxcclxuICAgICAgY29udGVudDoge1xyXG4gICAgICAgIGltYWdlc1BhdGg6IFtdLFxyXG4gICAgICAgIGNvbnRlbnRUZXh0OiAn5rS75Yqo5LuL57uNJ1xyXG4gICAgICB9LFxyXG4gICAgICBhY3Rpdml0eU9iajoge1xyXG4gICAgICAgIGFjdGl2aXR5VHlwZUluZGV4OiBudWxsLFxyXG4gICAgICAgIHR5cGVTZWxlY3RlZDogJycsXHJcbiAgICAgICAgc2VsZWN0ZWRTdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgYWN0aXZpdHlTaG93OiBmYWxzZSxcclxuICAgICAgICBhY3Rpdml0aWVzOiBbXHJcbiAgICAgICAgICB7bmFtZTogJ+S9k+iCsui/kOWKqCcsIHNlbGVjdGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICB7bmFtZTogJ+iusuW6p+S8muiuricsIHNlbGVjdGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICB7bmFtZTogJ+aIt+Wklua0u+WKqCcsIHNlbGVjdGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICB7bmFtZTogJ+ePree6p+a0u+WKqCcsIHNlbGVjdGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICB7bmFtZTogJ+ekvuWboua0u+WKqCcsIHNlbGVjdGVkOiBmYWxzZX0sXHJcbiAgICAgICAgICB7bmFtZTogJ+WFtuS7licsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGVPYmo6IHtcclxuICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgIGZsYWc6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a0u+WKqOWPkeW4gydcclxuICAgIH1cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ19jb250ZW50JylcclxuICAgICAgICBpZiAoZGF0YSA9PT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuY29udGVudCA9IHtcclxuICAgICAgICAgICAgaW1hZ2VzUGF0aDogW10sXHJcbiAgICAgICAgICAgIGNvbnRlbnRUZXh0OiAn5rS75Yqo5LuL57uNJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jb250ZW50RWRpdGVkID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YVxyXG4gICAgICAgICAgdGhpcy5jb250ZW50RWRpdGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLypcclxuICAgICrlm77niYfkuIrkvKBcclxuICAgICogcGF0aCAtLSDlm77niYfot6/lvoTmlbDnu4RcclxuICAgICogdHlwZSAtLSAxLnBvc3RlciAgIDIuY29udGVudEltZ3NcclxuICAgICovXHJcbiAgICBhc3luYyB1cExvYWRJbWcocGF0aHMsIHR5cGUpIHtcclxuICAgICAgbGV0IGhlYWRlciA9IHt9XHJcbiAgICAgIGhlYWRlclsnQ29udGVudC1UeXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgaGVhZGVyWydzZXNzaW9uJ10gPSB0aGlzLnNlc3Npb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgIHVybDogYXBpLmFjdGl2aXR5LnVwTG9hZEltZy51cmwsXHJcbiAgICAgICAgICBmaWxlUGF0aDogcGF0aHMsXHJcbiAgICAgICAgICBuYW1lOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyOiBoZWFkZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5wYXJzZShkYXRhLmRhdGEpXHJcbiAgICAgICAgaWYgKGJvZHkuY29kZSA9PT0gMSAmJiB0eXBlID09PSAncG9zdGVyJykge1xyXG4gICAgICAgICAgdGhpcy5wb3N0ZXJQYXRoID0gYm9keS5kYXRhXHJcbiAgICAgICAgfSBlbHNlIGlmIChib2R5LmNvZGUgPT09IDEgJiYgdHlwZSA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlbnRJbWdzLnB1c2goYm9keS5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn5Zu+54mH5LiK5Lyg5Ye66ZSZJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICog6YCJ5oup5rW35oqlXHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgICAgYXN5bmMgdXBMb2FkUG9zdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt0ZW1wRmlsZVBhdGhzfSA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICBzaXplVHlwZTogJ2NvbXByZXNzZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnBvc3RlciA9IHRlbXBGaWxlUGF0aHNbMF1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5UaW1lU2VsZWN0KHR5cGUpIHtcclxuICAgICAgICB0aGlzLmRhdGVPYmouZmxhZyA9ICF0aGlzLmRhdGVPYmouZmxhZ1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRlT2JqLmZsYWcpIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGVPYmoudHlwZSA9IHR5cGVcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgY2hvb3NlTG9jYXRpb24oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHtuYW1lLCBsYXRpdHVkZSwgbG9uZ2l0dWRlfSA9IGF3YWl0IHdlcHkuY2hvb3NlTG9jYXRpb24oKVxyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbi5uYW1lID0gbmFtZVxyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlXHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZVxyXG4gICAgICAgICAgdGhpcy5sb2NhbFNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5L2N572u6I635Y+W5Ye66ZSZJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5UeXBlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0eU9iai5hY3Rpdml0eVNob3cgPSAhdGhpcy5hY3Rpdml0eU9iai5hY3Rpdml0eVNob3dcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZpdHlPYmouYWN0aXZpdHlTaG93ICYmIHRoaXMuYWN0aXZpdHlPYmouYWN0aXZpdHlUeXBlSW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYmoudHlwZVNlbGVjdGVkID0gdGhpcy5hY3Rpdml0eU9iai5hY3Rpdml0aWVzW3RoaXMuYWN0aXZpdHlPYmouYWN0aXZpdHlUeXBlSW5kZXhdLm5hbWVcclxuICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYmouc2VsZWN0ZWRTdGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdFR5cGUoaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eU9iai5hY3Rpdml0eVR5cGVJbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5hY3Rpdml0eU9iai5hY3Rpdml0eVR5cGVJbmRleCA9IGluZGV4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYmouYWN0aXZpdGllc1t0aGlzLmFjdGl2aXR5T2JqLmFjdGl2aXR5VHlwZUluZGV4XS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWN0aXZpdHlPYmouYWN0aXZpdHlUeXBlSW5kZXggPSBpbmRleFxyXG4gICAgICAgIHRoaXMuYWN0aXZpdHlPYmouYWN0aXZpdGllc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRBY3Rpdml0eUNvbnRlbnQoKSB7XHJcbiAgICAgICAgdGhpcy4kcHJlbG9hZCgnY29udGVudCcsIHRoaXMuY29udGVudClcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnYWN0aXZpdHlDb250ZW50JylcclxuICAgICAgfSxcclxuICAgICAgZWRpdFRpdGxlKGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOa0u+WKqOWPkeW4g+WHveaVsFxyXG4gICAgICBhc3luYyBwdWJsaXNoKCkge1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSh0aGlzLmVuZERhdGVUaW1lKSAtIG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlVGltZSkgPCAwKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+W8gOWni+aXtumXtOS4jeiDveWkp+S6jue7k+adn+aXtumXtCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjdGl2aXR5RGF0YSA9IHt9XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkXHJcbiAgICAgICAgYWN0aXZpdHlEYXRhLmF1dGhvciA9IHRoaXMuc2Vzc2lvblxyXG4gICAgICAgIGlmICh0aGlzLmVuZERhdGVUaW1lID09PSAn6K+36YCJ5oup5byA5aeL5pe26Ze0JyB8fCB0aGlzLnN0YXJ0RGF0ZVRpbWUgPT09ICfor7fpgInmi6nnu5PmnZ/ml7bpl7QnIHx8ICF0aGlzLmNvbnRlbnRFZGl0ZWQgfHwgIXRoaXMubG9jYWxTZWxlY3RlZCB8fCAhdGhpcy5hY3Rpdml0eU9iai5zZWxlY3RlZFN0YXRlIHx8IHRoaXMudGl0bGUgPT09ICcnKSB7XHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+Whq+WGmeWujOaVtOWQhOmhueS/oeaBrydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aXZpdHlEYXRhLnR5cGUgPSB0aGlzLmFjdGl2aXR5T2JqLnR5cGVTZWxlY3RlZFxyXG4gICAgICAgIGFjdGl2aXR5RGF0YS5kYXRlID0ge31cclxuICAgICAgICBhY3Rpdml0eURhdGEuZGF0ZS5zdGFydCA9IHRoaXMuc3RhcnREYXRlVGltZVxyXG4gICAgICAgIGFjdGl2aXR5RGF0YS5kYXRlLmVuZCA9IHRoaXMuZW5kRGF0ZVRpbWVcclxuICAgICAgICBhY3Rpdml0eURhdGEuZGF0ZS5lbmRUaW1lID0gKG5ldyBEYXRlKHRoaXMuZW5kRGF0ZVRpbWUpKS5nZXRUaW1lKClcclxuICAgICAgICBhY3Rpdml0eURhdGEubG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uXHJcbiAgICAgICAgYWN0aXZpdHlEYXRhLmxpa2VkVXNlciA9IFtdXHJcbiAgICAgICAgYWN0aXZpdHlEYXRhLmh1bWFuTnVtID0gMFxyXG4gICAgICAgIGFjdGl2aXR5RGF0YS50aXRsZSA9IHRoaXMudGl0bGVcclxuICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5q2j5Zyo5Y+R5biDLCDor7fnqI3lkI4nLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHRoaXMucG9zdGVyICE9PSAnJykge1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy51cExvYWRJbWcodGhpcy5wb3N0ZXIsICdwb3N0ZXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb250ZW50LmltYWdlc1BhdGgubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGVudC5pbWFnZXNQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBMb2FkSW1nKHRoaXMuY29udGVudC5pbWFnZXNQYXRoW2ldLCAnY29udGVudCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFjdGl2aXR5RGF0YS5jb250ZW50ID0ge31cclxuICAgICAgICBhY3Rpdml0eURhdGEuY29udGVudC5jb250ZW50VGV4dCA9IHRoaXMuY29udGVudC5jb250ZW50VGV4dFxyXG4gICAgICAgIGFjdGl2aXR5RGF0YS5jb250ZW50LmltYWdlc1BhdGggPSB0aGlzLmNvbnRlbnRJbWdzXHJcbiAgICAgICAgYWN0aXZpdHlEYXRhLnBvc3RlclBhdGggPSB0aGlzLnBvc3RlclBhdGhcclxuICAgICAgICBsZXQgaGVhZGVyID0ge31cclxuICAgICAgICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgaGVhZGVyWydzZXNzaW9uJ10gPSB0aGlzLnNlc3Npb25cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogYXBpLmFjdGl2aXR5LnB1Ymxpc2gudXJsLFxyXG4gICAgICAgICAgbWV0aG9kOiBhcGkuYWN0aXZpdHkucHVibGlzaC5tZXRob2QsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpdml0eURhdGEsXHJcbiAgICAgICAgICBoZWFkZXI6IGhlYWRlclxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09PSAxKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCduZXdpdGVtJywgZGF0YS5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5Y+R5biD5aSx6LSlJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHNlc3Npb24gPSBhd2FpdCB3ZXB5LmNoZWNrU2Vzc2lvbigpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnX2NvbnRlbnQnLCAnJylcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZXNzaW9uLmVyck1zZyAhPT0gJ2NoZWNrU2Vzc2lvbjpvaycpIHtcclxuICAgICAgICBhd2FpdCBpbnRlcmZhY2VzLmxvZ2luKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnc2VsZWN0ZWREYXRlJzogKHN0YXRlLCB0eXBlLCBkYXRldGltZSwgJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSAnY2FuY2VsJykge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnc3RhcnQnKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZVRpbWUgPSBkYXRldGltZVxyXG4gICAgICAgICAgdGhpcy5zdGFydFNlbGVjdGVkID0gJ3NlbGVjdGVkJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVuZERhdGVUaW1lID0gZGF0ZXRpbWVcclxuICAgICAgICAgIHRoaXMuZW5kU2VsZWN0ZWQgPSAnc2VsZWN0ZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=