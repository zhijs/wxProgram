'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.config = {
      'pages': ['pages/index', 'pages/newActivity', 'pages/activityContent', 'pages/activityDetail', 'pages/activityIntroduce', 'pages/joinPage', 'pages/chatPage'],
      'window': {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#00B2EE',
        'navigationBarTitleText': '校园活动广场',
        'navigationBarTextStyle': '#ffffff',
        'enablePullDownRefresh': true
      }
    };
    _this.globalData = {
      openId: ''
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }
  // 页面设置


  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJnbG9iYWxEYXRhIiwib3BlbklkIiwidXNlIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBcUJFLG9CQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFsQmRBLE1Ba0JjLEdBbEJMO0FBQ1AsZUFBUyxDQUNQLGFBRE8sRUFFUCxtQkFGTyxFQUdQLHVCQUhPLEVBSVAsc0JBSk8sRUFLUCx5QkFMTyxFQU1QLGdCQU5PLEVBT1AsZ0JBUE8sQ0FERjtBQVVQLGdCQUFVO0FBQ1IsK0JBQXVCLE9BRGY7QUFFUix3Q0FBZ0MsU0FGeEI7QUFHUixrQ0FBMEIsUUFIbEI7QUFJUixrQ0FBMEIsU0FKbEI7QUFLUixpQ0FBeUI7QUFMakI7QUFWSCxLQWtCSztBQUFBLFVBS2RDLFVBTGMsR0FLRDtBQUNYQyxjQUFRO0FBREcsS0FMQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjtBQXZCRDs7OztFQUQyQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gICAgLy8g6aG16Z2i6K6+572uXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICdwYWdlcyc6IFtcclxuICAgICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICdwYWdlcy9uZXdBY3Rpdml0eScsXHJcbiAgICAgICAgJ3BhZ2VzL2FjdGl2aXR5Q29udGVudCcsXHJcbiAgICAgICAgJ3BhZ2VzL2FjdGl2aXR5RGV0YWlsJyxcclxuICAgICAgICAncGFnZXMvYWN0aXZpdHlJbnRyb2R1Y2UnLFxyXG4gICAgICAgICdwYWdlcy9qb2luUGFnZScsXHJcbiAgICAgICAgJ3BhZ2VzL2NoYXRQYWdlJ1xyXG4gICAgICBdLFxyXG4gICAgICAnd2luZG93Jzoge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kVGV4dFN0eWxlJzogJ2xpZ2h0JyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjMDBCMkVFJyxcclxuICAgICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfmoKHlm63mtLvliqjlub/lnLonLFxyXG4gICAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJyNmZmZmZmYnLFxyXG4gICAgICAgICdlbmFibGVQdWxsRG93blJlZnJlc2gnOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgICB9XHJcbiAgICBnbG9iYWxEYXRhID0ge1xyXG4gICAgICBvcGVuSWQ6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=