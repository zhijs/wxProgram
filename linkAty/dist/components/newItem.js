'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newitem = function (_wepy$component) {
  _inherits(newitem, _wepy$component);

  function newitem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, newitem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = newitem.__proto__ || Object.getPrototypeOf(newitem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      newItem: {
        type: Object,
        twoWay: true
      },
      items: {
        type: Object,
        twoWay: true
      },
      index: Number
    }, _this.data = {
      session: ''
    }, _this.methods = {
      deleteNew: function deleteNew(index) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var header, data, msg, body;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  header = {};

                  header.session = _this2.session;
                  data = {
                    messgeId: _this2.items.data[index]._id
                  };
                  _context.next = 5;
                  return _wepy2.default.showModal({
                    title: '提示',
                    content: '确定删除'
                  });

                case 5:
                  msg = _context.sent;

                  if (!msg.confirm) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 9;
                  return _wepy2.default.request({
                    url: _config.api.message.messageDel.url,
                    method: _config.api.message.messageDel.method,
                    data: data,
                    header: header
                  });

                case 9:
                  body = _context.sent;

                  if (body.data.code === 1) {
                    _this2.items.data[index].message = [];
                    _this2.$apply();
                  }

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(newitem, [{
    key: 'onLoad',
    value: function onLoad() {
      try {
        var _session = _wepy2.default.getStorageSync('_session');
        this.session = _session.split('<<')[0];
      } catch (e) {}
    }
  }]);

  return newitem;
}(_wepy2.default.component);

exports.default = newitem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld0l0ZW0uanMiXSwibmFtZXMiOlsibmV3aXRlbSIsInByb3BzIiwibmV3SXRlbSIsInR5cGUiLCJPYmplY3QiLCJ0d29XYXkiLCJpdGVtcyIsImluZGV4IiwiTnVtYmVyIiwiZGF0YSIsInNlc3Npb24iLCJtZXRob2RzIiwiZGVsZXRlTmV3IiwiaGVhZGVyIiwibWVzc2dlSWQiLCJfaWQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtc2ciLCJjb25maXJtIiwicmVxdWVzdCIsInVybCIsIm1lc3NhZ2UiLCJtZXNzYWdlRGVsIiwibWV0aG9kIiwiYm9keSIsImNvZGUiLCIkYXBwbHkiLCJfc2Vzc2lvbiIsImdldFN0b3JhZ2VTeW5jIiwic3BsaXQiLCJlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNHOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQyxNQURDO0FBRVBDLGdCQUFRO0FBRkQsT0FESDtBQUtOQyxhQUFPO0FBQ0xILGNBQU1DLE1BREQ7QUFFTEMsZ0JBQVE7QUFGSCxPQUxEO0FBU05FLGFBQU9DO0FBVEQsSyxRQVdSQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFVUEMsTyxHQUFVO0FBQ0ZDLGVBREUscUJBQ1FMLEtBRFIsRUFDZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQk0sd0JBRGlCLEdBQ1IsRUFEUTs7QUFFckJBLHlCQUFPSCxPQUFQLEdBQWlCLE9BQUtBLE9BQXRCO0FBQ0lELHNCQUhpQixHQUdWO0FBQ1RLLDhCQUFVLE9BQUtSLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkYsS0FBaEIsRUFBdUJRO0FBRHhCLG1CQUhVO0FBQUE7QUFBQSx5QkFNTCxlQUFLQyxTQUFMLENBQWU7QUFDN0JDLDJCQUFPLElBRHNCO0FBRTdCQyw2QkFBUztBQUZvQixtQkFBZixDQU5LOztBQUFBO0FBTWpCQyxxQkFOaUI7O0FBQUEsdUJBVWpCQSxJQUFJQyxPQVZhO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBV0EsZUFBS0MsT0FBTCxDQUFhO0FBQzlCQyx5QkFBSyxZQUFJQyxPQUFKLENBQVlDLFVBQVosQ0FBdUJGLEdBREU7QUFFOUJHLDRCQUFRLFlBQUlGLE9BQUosQ0FBWUMsVUFBWixDQUF1QkMsTUFGRDtBQUc5QmhCLDBCQUFNQSxJQUh3QjtBQUk5QkksNEJBQVFBO0FBSnNCLG1CQUFiLENBWEE7O0FBQUE7QUFXYmEsc0JBWGE7O0FBaUJuQixzQkFBSUEsS0FBS2pCLElBQUwsQ0FBVWtCLElBQVYsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsMkJBQUtyQixLQUFMLENBQVdHLElBQVgsQ0FBZ0JGLEtBQWhCLEVBQXVCZ0IsT0FBdkIsR0FBaUMsRUFBakM7QUFDQSwyQkFBS0ssTUFBTDtBQUNEOztBQXBCa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQnRCO0FBdkJPLEs7Ozs7OzZCQVBEO0FBQ1AsVUFBSTtBQUNGLFlBQUlDLFdBQVcsZUFBS0MsY0FBTCxDQUFvQixVQUFwQixDQUFmO0FBQ0EsYUFBS3BCLE9BQUwsR0FBZW1CLFNBQVNFLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLENBQXJCLENBQWY7QUFDRCxPQUhELENBR0UsT0FBT0MsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OztFQXJCa0MsZUFBS0MsUzs7a0JBQXJCakMsTyIsImZpbGUiOiJuZXdJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbmV3aXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICBwcm9wcyA9IHtcclxuICAgICAgIG5ld0l0ZW06IHtcclxuICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICB0d29XYXk6IHRydWVcclxuICAgICAgIH0sXHJcbiAgICAgICBpdGVtczoge1xyXG4gICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgICAgfSxcclxuICAgICAgIGluZGV4OiBOdW1iZXJcclxuICAgICB9XHJcbiAgICAgZGF0YSA9IHtcclxuICAgICAgIHNlc3Npb246ICcnXHJcbiAgICAgfVxyXG4gICAgIG9uTG9hZCgpIHtcclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgIGxldCBfc2Vzc2lvbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ19zZXNzaW9uJylcclxuICAgICAgICAgdGhpcy5zZXNzaW9uID0gX3Nlc3Npb24uc3BsaXQoJzw8JylbMF1cclxuICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgIGFzeW5jIGRlbGV0ZU5ldyhpbmRleCkge1xyXG4gICAgICAgICBsZXQgaGVhZGVyID0ge31cclxuICAgICAgICAgaGVhZGVyLnNlc3Npb24gPSB0aGlzLnNlc3Npb25cclxuICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgbWVzc2dlSWQ6IHRoaXMuaXRlbXMuZGF0YVtpbmRleF0uX2lkXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IG1zZyA9IGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgY29udGVudDogJ+ehruWumuWIoOmZpCdcclxuICAgICAgICAgfSlcclxuICAgICAgICAgaWYgKG1zZy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICB1cmw6IGFwaS5tZXNzYWdlLm1lc3NhZ2VEZWwudXJsLFxyXG4gICAgICAgICAgICAgbWV0aG9kOiBhcGkubWVzc2FnZS5tZXNzYWdlRGVsLm1ldGhvZCxcclxuICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICBoZWFkZXI6IGhlYWRlclxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgaWYgKGJvZHkuZGF0YS5jb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgICB0aGlzLml0ZW1zLmRhdGFbaW5kZXhdLm1lc3NhZ2UgPSBbXVxyXG4gICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4iXX0=