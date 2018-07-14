'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../npm/wepy-async-function/index.js');

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myactivity = function (_wepy$component) {
  _inherits(myactivity, _wepy$component);

  function myactivity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, myactivity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myactivity.__proto__ || Object.getPrototypeOf(myactivity)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      item: {
        type: Object,
        twoWay: true
      },
      index: {
        type: Number
      },
      activitys: {
        type: Object,
        twoWay: true
      }
    }, _this.data = {
      timeNow: '',
      session: ''
    }, _this.methods = {
      showMore: function showMore(index) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _session, _ref2, tapIndex, imgPaths, data, header, body;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _session = _wepy2.default.getStorageSync('_session');

                  _this2.session = _session.split('<<')[0];
                  _context.next = 5;
                  return _wepy2.default.showActionSheet({
                    itemList: ['删除']
                  });

                case 5:
                  _ref2 = _context.sent;
                  tapIndex = _ref2.tapIndex;
                  imgPaths = [];

                  if (_this2.activitys[index].value.posterPath !== '') {
                    imgPaths.push(_this2.activitys[index].value.posterPath);
                  }
                  data = {
                    imgPaths: imgPaths.concat(_this2.activitys[index].value.content.imagesPath),
                    activityId: _this2.activitys[index].value._id
                    // 删除对应的条目
                  };

                  if (!(tapIndex === 0)) {
                    _context.next = 17;
                    break;
                  }

                  header = {};

                  header['session'] = _this2.session;
                  _context.next = 15;
                  return _wepy2.default.request({
                    url: _config.api.activity.activityDel.url,
                    method: _config.api.activity.activityDel.method,
                    data: data,
                    header: header
                  });

                case 15:
                  body = _context.sent;

                  if (body.data.code === 1) {
                    _this2.$emit('deleteMyActivity', _this2.activitys[index].oldIndex);
                  }

                case 17:
                  _context.next = 21;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context['catch'](0);

                case 21:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 19]]);
        }))();
      }
    }, _this.computed = {
      dateNow: function dateNow() {
        return new Date().getTime();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(myactivity, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return myactivity;
}(_wepy2.default.component);

exports.default = myactivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWN0aXZpdHkuanMiXSwibmFtZXMiOlsibXlhY3Rpdml0eSIsInByb3BzIiwiaXRlbSIsInR5cGUiLCJPYmplY3QiLCJ0d29XYXkiLCJpbmRleCIsIk51bWJlciIsImFjdGl2aXR5cyIsImRhdGEiLCJ0aW1lTm93Iiwic2Vzc2lvbiIsIm1ldGhvZHMiLCJzaG93TW9yZSIsIl9zZXNzaW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJzcGxpdCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGFwSW5kZXgiLCJpbWdQYXRocyIsInZhbHVlIiwicG9zdGVyUGF0aCIsInB1c2giLCJjb25jYXQiLCJjb250ZW50IiwiaW1hZ2VzUGF0aCIsImFjdGl2aXR5SWQiLCJfaWQiLCJoZWFkZXIiLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZpdHkiLCJhY3Rpdml0eURlbCIsIm1ldGhvZCIsImJvZHkiLCJjb2RlIiwiJGVtaXQiLCJvbGRJbmRleCIsImNvbXB1dGVkIiwiZGF0ZU5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNHOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGdCQUFRO0FBRkosT0FEQTtBQUtOQyxhQUFPO0FBQ0xILGNBQU1JO0FBREQsT0FMRDtBQVFOQyxpQkFBVztBQUNUTCxjQUFNQyxNQURHO0FBRVRDLGdCQUFRO0FBRkM7QUFSTCxLLFFBYVJJLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsZUFBUztBQUZKLEssUUFNUEMsTyxHQUFVO0FBQ0ZDLGNBREUsb0JBQ09QLEtBRFAsRUFDYztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkUSwwQkFGYyxHQUVILGVBQUtDLGNBQUwsQ0FBb0IsVUFBcEIsQ0FGRzs7QUFHbEIseUJBQUtKLE9BQUwsR0FBZUcsU0FBU0UsS0FBVCxDQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FBZjtBQUhrQjtBQUFBLHlCQUlPLGVBQUtDLGVBQUwsQ0FBcUI7QUFDNUNDLDhCQUFVLENBQUMsSUFBRDtBQURrQyxtQkFBckIsQ0FKUDs7QUFBQTtBQUFBO0FBSVhDLDBCQUpXLFNBSVhBLFFBSlc7QUFPZEMsMEJBUGMsR0FPSCxFQVBHOztBQVFsQixzQkFBSSxPQUFLWixTQUFMLENBQWVGLEtBQWYsRUFBc0JlLEtBQXRCLENBQTRCQyxVQUE1QixLQUEyQyxFQUEvQyxFQUFtRDtBQUNqREYsNkJBQVNHLElBQVQsQ0FBYyxPQUFLZixTQUFMLENBQWVGLEtBQWYsRUFBc0JlLEtBQXRCLENBQTRCQyxVQUExQztBQUNEO0FBQ0diLHNCQVhjLEdBV1A7QUFDVFcsOEJBQVVBLFNBQVNJLE1BQVQsQ0FBZ0IsT0FBS2hCLFNBQUwsQ0FBZUYsS0FBZixFQUFzQmUsS0FBdEIsQ0FBNEJJLE9BQTVCLENBQW9DQyxVQUFwRCxDQUREO0FBRVRDLGdDQUFZLE9BQUtuQixTQUFMLENBQWVGLEtBQWYsRUFBc0JlLEtBQXRCLENBQTRCTztBQUUxQztBQUpXLG1CQVhPOztBQUFBLHdCQWdCZFQsYUFBYSxDQWhCQztBQUFBO0FBQUE7QUFBQTs7QUFpQlpVLHdCQWpCWSxHQWlCSCxFQWpCRzs7QUFrQmhCQSx5QkFBTyxTQUFQLElBQW9CLE9BQUtsQixPQUF6QjtBQWxCZ0I7QUFBQSx5QkFtQkcsZUFBS21CLE9BQUwsQ0FBYTtBQUM5QkMseUJBQUssWUFBSUMsUUFBSixDQUFhQyxXQUFiLENBQXlCRixHQURBO0FBRTlCRyw0QkFBUSxZQUFJRixRQUFKLENBQWFDLFdBQWIsQ0FBeUJDLE1BRkg7QUFHOUJ6QiwwQkFBTUEsSUFId0I7QUFJOUJvQiw0QkFBUUE7QUFKc0IsbUJBQWIsQ0FuQkg7O0FBQUE7QUFtQlZNLHNCQW5CVTs7QUF5QmhCLHNCQUFJQSxLQUFLMUIsSUFBTCxDQUFVMkIsSUFBVixLQUFtQixDQUF2QixFQUEwQjtBQUN4QiwyQkFBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCLE9BQUs3QixTQUFMLENBQWVGLEtBQWYsRUFBc0JnQyxRQUFyRDtBQUNEOztBQTNCZTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJyQjtBQS9CTyxLLFFBaUNWQyxRLEdBQVc7QUFDVEMsYUFEUyxxQkFDQztBQUNSLGVBQVEsSUFBSUMsSUFBSixFQUFELENBQWFDLE9BQWIsRUFBUDtBQUNEO0FBSFEsSzs7Ozs7NkJBbkNGLENBQ1I7Ozs7RUFuQnFDLGVBQUtDLFM7O2tCQUF4QjNDLFUiLCJmaWxlIjoibXlhY3Rpdml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbXlhY3Rpdml0eSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICBwcm9wcyA9IHtcclxuICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICB0d29XYXk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICBpbmRleDoge1xyXG4gICAgICAgICB0eXBlOiBOdW1iZXJcclxuICAgICAgIH0sXHJcbiAgICAgICBhY3Rpdml0eXM6IHtcclxuICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICB0d29XYXk6IHRydWVcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgZGF0YSA9IHtcclxuICAgICAgIHRpbWVOb3c6ICcnLFxyXG4gICAgICAgc2Vzc2lvbjogJydcclxuICAgICB9XHJcbiAgICAgb25Mb2FkKCkge1xyXG4gICAgIH1cclxuICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgYXN5bmMgc2hvd01vcmUoaW5kZXgpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICBsZXQgX3Nlc3Npb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfc2Vzc2lvbicpXHJcbiAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gX3Nlc3Npb24uc3BsaXQoJzw8JylbMF1cclxuICAgICAgICAgICBjb25zdCB7dGFwSW5kZXh9ID0gYXdhaXQgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgICAgaXRlbUxpc3Q6IFsn5Yig6ZmkJ11cclxuICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIGxldCBpbWdQYXRocyA9IFtdXHJcbiAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHlzW2luZGV4XS52YWx1ZS5wb3N0ZXJQYXRoICE9PSAnJykge1xyXG4gICAgICAgICAgICAgaW1nUGF0aHMucHVzaCh0aGlzLmFjdGl2aXR5c1tpbmRleF0udmFsdWUucG9zdGVyUGF0aClcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICBpbWdQYXRoczogaW1nUGF0aHMuY29uY2F0KHRoaXMuYWN0aXZpdHlzW2luZGV4XS52YWx1ZS5jb250ZW50LmltYWdlc1BhdGgpLFxyXG4gICAgICAgICAgICAgYWN0aXZpdHlJZDogdGhpcy5hY3Rpdml0eXNbaW5kZXhdLnZhbHVlLl9pZFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAvLyDliKDpmaTlr7nlupTnmoTmnaHnm65cclxuICAgICAgICAgICBpZiAodGFwSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgIGxldCBoZWFkZXIgPSB7fVxyXG4gICAgICAgICAgICAgaGVhZGVyWydzZXNzaW9uJ10gPSB0aGlzLnNlc3Npb25cclxuICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICB1cmw6IGFwaS5hY3Rpdml0eS5hY3Rpdml0eURlbC51cmwsXHJcbiAgICAgICAgICAgICAgIG1ldGhvZDogYXBpLmFjdGl2aXR5LmFjdGl2aXR5RGVsLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXJcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICBpZiAoYm9keS5kYXRhLmNvZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGVsZXRlTXlBY3Rpdml0eScsIHRoaXMuYWN0aXZpdHlzW2luZGV4XS5vbGRJbmRleClcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAgZGF0ZU5vdygpIHtcclxuICAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIl19