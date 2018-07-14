'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  getUserInfo: function getUserInfo() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var loginData, userInfo, userinfoData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wepy2.default.login();

            case 2:
              loginData = _context.sent;
              _context.next = 5;
              return _wepy2.default.getUserInfo();

            case 5:
              userInfo = _context.sent;
              userinfoData = {
                name: userInfo.userInfo.nickName,
                avatar: userInfo.userInfo.avatarUrl
              };

              try {
                _wepy2.default.setStorageSync('_userinfo', userinfoData);
              } catch (e) {}
              userInfo.code = loginData.code;
              return _context.abrupt('return', userInfo);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  login: function login() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var userinfoRaw, userinfo;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userinfoRaw = {};
              userinfo = {};
              _context2.prev = 2;
              _context2.next = 5;
              return interfaces.getUserInfo();

            case 5:
              userinfoRaw = _context2.sent;
              _context2.next = 8;
              return _wepy2.default.request({
                url: _config.api.user.login.url,
                method: _config.api.user.login.method,
                header: {
                  'x-wechat-code': userinfoRaw.code,
                  'x-wechat-encrypted': userinfoRaw.encryptedData,
                  'x-wechat-iv': userinfoRaw.iv
                },
                dataType: 'json',
                data: {}
              });

            case 8:
              userinfo = _context2.sent;

              if (userinfo.data.code === -1) {
                _wepy2.default.showModal({
                  title: '提示',
                  content: '获取信息失败，请重新进入'
                });
              }
              _context2.next = 12;
              return _wepy2.default.setStorage({
                'key': '_session',
                data: userinfo.data.session
              });

            case 12:
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2['catch'](2);

              _wepy2.default.showModal({
                title: '提示',
                content: '获取信息失败，请重新进入'
              });

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 14]]);
    }))();
  }
};

exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRVc2VySW5mbyIsImxvZ2luIiwibG9naW5EYXRhIiwidXNlckluZm8iLCJ1c2VyaW5mb0RhdGEiLCJuYW1lIiwibmlja05hbWUiLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJzZXRTdG9yYWdlU3luYyIsImUiLCJjb2RlIiwidXNlcmluZm9SYXciLCJ1c2VyaW5mbyIsInJlcXVlc3QiLCJ1cmwiLCJ1c2VyIiwibWV0aG9kIiwiaGVhZGVyIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwiZGF0YVR5cGUiLCJkYXRhIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2V0U3RvcmFnZSIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDWEMsYUFEVyx5QkFDRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ00sZUFBS0MsS0FBTCxFQUROOztBQUFBO0FBQ1pDLHVCQURZO0FBQUE7QUFBQSxxQkFFSyxlQUFLRixXQUFMLEVBRkw7O0FBQUE7QUFFWkcsc0JBRlk7QUFHZEMsMEJBSGMsR0FHQztBQUNqQkMsc0JBQU1GLFNBQVNBLFFBQVQsQ0FBa0JHLFFBRFA7QUFFakJDLHdCQUFRSixTQUFTQSxRQUFULENBQWtCSztBQUZULGVBSEQ7O0FBT2xCLGtCQUFJO0FBQ0YsK0JBQUtDLGNBQUwsQ0FBb0IsV0FBcEIsRUFBaUNMLFlBQWpDO0FBQ0QsZUFGRCxDQUVFLE9BQU9NLENBQVAsRUFBVSxDQUNYO0FBQ0RQLHVCQUFTUSxJQUFULEdBQWdCVCxVQUFVUyxJQUExQjtBQVhrQiwrQ0FZWFIsUUFaVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFuQixHQWRnQjtBQWVYRixPQWZXLG1CQWVIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JXLHlCQURRLEdBQ00sRUFETjtBQUVSQyxzQkFGUSxHQUVHLEVBRkg7QUFBQTtBQUFBO0FBQUEscUJBSVNkLFdBQVdDLFdBQVgsRUFKVDs7QUFBQTtBQUlYWSx5QkFKVztBQUFBO0FBQUEscUJBS00sZUFBS0UsT0FBTCxDQUFhO0FBQzVCQyxxQkFBSyxZQUFJQyxJQUFKLENBQVNmLEtBQVQsQ0FBZWMsR0FEUTtBQUU1QkUsd0JBQVEsWUFBSUQsSUFBSixDQUFTZixLQUFULENBQWVnQixNQUZLO0FBRzVCQyx3QkFBUTtBQUNOLG1DQUFpQk4sWUFBWUQsSUFEdkI7QUFFTix3Q0FBc0JDLFlBQVlPLGFBRjVCO0FBR04saUNBQWVQLFlBQVlRO0FBSHJCLGlCQUhvQjtBQVE1QkMsMEJBQVUsTUFSa0I7QUFTNUJDLHNCQUFNO0FBVHNCLGVBQWIsQ0FMTjs7QUFBQTtBQUtYVCxzQkFMVzs7QUFnQlYsa0JBQUlBLFNBQVNTLElBQVQsQ0FBY1gsSUFBZCxLQUF1QixDQUFDLENBQTVCLEVBQStCO0FBQzdCLCtCQUFLWSxTQUFMLENBQWU7QUFDYkMseUJBQU8sSUFETTtBQUViQywyQkFBUztBQUZJLGlCQUFmO0FBSUQ7QUFyQlM7QUFBQSxxQkFzQkwsZUFBS0MsVUFBTCxDQUFnQjtBQUNwQix1QkFBTyxVQURhO0FBRW5CSixzQkFBTVQsU0FBU1MsSUFBVCxDQUFjSztBQUZELGVBQWhCLENBdEJLOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBMkJWLDZCQUFLSixTQUFMLENBQWU7QUFDYkMsdUJBQU8sSUFETTtBQUViQyx5QkFBUztBQUZJLGVBQWY7O0FBM0JVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NiO0FBL0NnQixDQUFuQjs7a0JBa0RlMUIsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IGludGVyZmFjZXMgPSB7XHJcbiAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCBsb2dpbkRhdGEgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICBsZXQgdXNlcmluZm9EYXRhID0ge1xyXG4gICAgICBuYW1lOiB1c2VySW5mby51c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgYXZhdGFyOiB1c2VySW5mby51c2VySW5mby5hdmF0YXJVcmxcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ191c2VyaW5mbycsIHVzZXJpbmZvRGF0YSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHVzZXJJbmZvLmNvZGUgPSBsb2dpbkRhdGEuY29kZVxyXG4gICAgcmV0dXJuIHVzZXJJbmZvXHJcbiAgfSxcclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGxldCB1c2VyaW5mb1JhdyA9IHt9XHJcbiAgICBsZXQgdXNlcmluZm8gPSB7fVxyXG4gICAgdHJ5IHtcclxuICBcdCAgdXNlcmluZm9SYXcgPSBhd2FpdCBpbnRlcmZhY2VzLmdldFVzZXJJbmZvKCkgXHQgIFxyXG4gIFx0ICB1c2VyaW5mbyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgXHQgICAgdXJsOiBhcGkudXNlci5sb2dpbi51cmwsXHJcbiAgXHQgICAgbWV0aG9kOiBhcGkudXNlci5sb2dpbi5tZXRob2QsXHJcbiAgXHQgICAgaGVhZGVyOiB7XHJcbiAgXHQgICAgICAneC13ZWNoYXQtY29kZSc6IHVzZXJpbmZvUmF3LmNvZGUsXHJcbiAgXHQgICAgICAneC13ZWNoYXQtZW5jcnlwdGVkJzogdXNlcmluZm9SYXcuZW5jcnlwdGVkRGF0YSxcclxuICBcdCAgICAgICd4LXdlY2hhdC1pdic6IHVzZXJpbmZvUmF3Lml2XHJcbiAgXHQgICAgfSxcclxuICBcdCAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gIFx0ICAgIGRhdGE6IHt9XHJcbiAgXHQgIH0pXHJcbiAgICAgIGlmICh1c2VyaW5mby5kYXRhLmNvZGUgPT09IC0xKSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+iOt+WPluS/oeaBr+Wksei0pe+8jOivt+mHjeaWsOi/m+WFpSdcclxuICAgICAgICB9KSAgXHJcbiAgICAgIH1cclxuICBcdCAgYXdhaXQgd2VweS5zZXRTdG9yYWdlKHtcclxuICBcdCAgICAna2V5JzogJ19zZXNzaW9uJyxcclxuICBcdCAgICAgZGF0YTogdXNlcmluZm8uZGF0YS5zZXNzaW9uXHJcbiAgXHQgIH0pXHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiAn6I635Y+W5L+h5oGv5aSx6LSl77yM6K+36YeN5paw6L+b5YWlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlcyJdfQ==