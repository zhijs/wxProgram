'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dateToStr = require('./../utils/dateToStr.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var datetime = function (_wepy$component) {
  _inherits(datetime, _wepy$component);

  function datetime() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, datetime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = datetime.__proto__ || Object.getPrototypeOf(datetime)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      month: [],
      day: [],
      hour: [],
      minute: [],
      years: [],
      flag: true,
      date: null,
      value: [0, 1, 1, '00', '00'],
      datetime: null,
      animationData: {}
    }, _this.props = {
      dateObj: Object,
      twoWay: true
    }, _this.methods = {
      selectPicker: function selectPicker(type, dateType) {
        this.dateObj.flag = false;
        this.$apply();
        this.$emit('selectedDate', type, this.dateObj.type, this.datetime);
      },
      bindChange: function bindChange(e) {
        var val = e.detail.value;
        console.log(val);
        this.datetime = this.years[val[0]] + '/' + this.month[val[1]] + '/' + this.day[val[2]] + ' ' + this.hour[val[3]] + ':' + this.minute[val[4]];
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(datetime, [{
    key: 'onLoad',
    value: function onLoad() {
      for (var m = 1; m <= 12; m++) {
        var M = m < 10 ? 0 + '' + m : m;
        this.month.push(M);
      }
      for (var d = 1; d <= 31; d++) {
        var D = d < 10 ? 0 + '' + d : d;
        this.day.push(D);
      }
      for (var h = 0; h < 24; h++) {
        var H = h < 10 ? 0 + '' + h : h;
        this.hour.push(H);
      }
      for (var minute = 0; minute < 60; minute++) {
        var Minute = minute < 10 ? 0 + '' + minute : minute;
        this.minute.push(Minute);
      }
      var year = new Date().getFullYear();
      this.years = [year, year + 1];
      this.date = new Date();
      this.datetime = (0, _dateToStr.date2str)(this.date, 'datetime');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return datetime;
}(_wepy2.default.component);

exports.default = datetime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGV0aW1lLmpzIl0sIm5hbWVzIjpbImRhdGV0aW1lIiwiZGF0YSIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInllYXJzIiwiZmxhZyIsImRhdGUiLCJ2YWx1ZSIsImFuaW1hdGlvbkRhdGEiLCJwcm9wcyIsImRhdGVPYmoiLCJPYmplY3QiLCJ0d29XYXkiLCJtZXRob2RzIiwic2VsZWN0UGlja2VyIiwidHlwZSIsImRhdGVUeXBlIiwiJGFwcGx5IiwiJGVtaXQiLCJiaW5kQ2hhbmdlIiwiZSIsInZhbCIsImRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJtIiwiTSIsInB1c2giLCJkIiwiRCIsImgiLCJIIiwiTWludXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRzs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxjQUFRLEVBSkg7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLFlBQU0sSUFORDtBQU9MQyxZQUFNLElBUEQ7QUFRTEMsYUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FSRjtBQVNMVCxnQkFBVSxJQVRMO0FBVUxVLHFCQUFlO0FBVlYsSyxRQVlQQyxLLEdBQVE7QUFDTkMsZUFBU0MsTUFESDtBQUVOQyxjQUFRO0FBRkYsSyxRQTRCUkMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLQyxJQURMLEVBQ1dDLFFBRFgsRUFDcUI7QUFDM0IsYUFBS04sT0FBTCxDQUFhTCxJQUFiLEdBQW9CLEtBQXBCO0FBQ0EsYUFBS1ksTUFBTDtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxjQUFYLEVBQTJCSCxJQUEzQixFQUFpQyxLQUFLTCxPQUFMLENBQWFLLElBQTlDLEVBQW9ELEtBQUtqQixRQUF6RDtBQUNELE9BTE87QUFNUnFCLGdCQU5RLHNCQU1HQyxDQU5ILEVBTU07QUFDWixZQUFNQyxNQUFNRCxFQUFFRSxNQUFGLENBQVNmLEtBQXJCO0FBQ0FnQixnQkFBUUMsR0FBUixDQUFZSCxHQUFaO0FBQ0EsYUFBS3ZCLFFBQUwsR0FBZ0IsS0FBS00sS0FBTCxDQUFXaUIsSUFBSSxDQUFKLENBQVgsSUFBcUIsR0FBckIsR0FBMkIsS0FBS3JCLEtBQUwsQ0FBV3FCLElBQUksQ0FBSixDQUFYLENBQTNCLEdBQWdELEdBQWhELEdBQXNELEtBQUtwQixHQUFMLENBQVNvQixJQUFJLENBQUosQ0FBVCxDQUF0RCxHQUF5RSxHQUF6RSxHQUErRSxLQUFLbkIsSUFBTCxDQUFVbUIsSUFBSSxDQUFKLENBQVYsQ0FBL0UsR0FBbUcsR0FBbkcsR0FBeUcsS0FBS2xCLE1BQUwsQ0FBWWtCLElBQUksQ0FBSixDQUFaLENBQXpIO0FBQ0Q7QUFWTyxLOzs7Ozs2QkF4QkQ7QUFDUCxXQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsS0FBSyxFQUFyQixFQUF5QkEsR0FBekIsRUFBOEI7QUFDNUIsWUFBSUMsSUFBSUQsSUFBSSxFQUFKLEdBQVUsSUFBSSxFQUFKLEdBQVNBLENBQW5CLEdBQXdCQSxDQUFoQztBQUNBLGFBQUt6QixLQUFMLENBQVcyQixJQUFYLENBQWdCRCxDQUFoQjtBQUNEO0FBQ0QsV0FBSyxJQUFJRSxJQUFJLENBQWIsRUFBZ0JBLEtBQUssRUFBckIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQzVCLFlBQUlDLElBQUlELElBQUksRUFBSixHQUFVLElBQUksRUFBSixHQUFTQSxDQUFuQixHQUF3QkEsQ0FBaEM7QUFDQSxhQUFLM0IsR0FBTCxDQUFTMEIsSUFBVCxDQUFjRSxDQUFkO0FBQ0Q7QUFDRCxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsR0FBeEIsRUFBNkI7QUFDM0IsWUFBSUMsSUFBSUQsSUFBSSxFQUFKLEdBQVUsSUFBSSxFQUFKLEdBQVNBLENBQW5CLEdBQXdCQSxDQUFoQztBQUNBLGFBQUs1QixJQUFMLENBQVV5QixJQUFWLENBQWVJLENBQWY7QUFDRDtBQUNELFdBQUssSUFBSTVCLFNBQVMsQ0FBbEIsRUFBcUJBLFNBQVMsRUFBOUIsRUFBa0NBLFFBQWxDLEVBQTRDO0FBQzFDLFlBQUk2QixTQUFTN0IsU0FBUyxFQUFULEdBQWUsSUFBSSxFQUFKLEdBQVNBLE1BQXhCLEdBQWtDQSxNQUEvQztBQUNBLGFBQUtBLE1BQUwsQ0FBWXdCLElBQVosQ0FBaUJLLE1BQWpCO0FBQ0Q7QUFDRCxVQUFJQyxPQUFRLElBQUlDLElBQUosRUFBRCxDQUFXQyxXQUFYLEVBQVg7QUFDQSxXQUFLL0IsS0FBTCxHQUFhLENBQUM2QixJQUFELEVBQU9BLE9BQU8sQ0FBZCxDQUFiO0FBQ0EsV0FBSzNCLElBQUwsR0FBWSxJQUFJNEIsSUFBSixFQUFaO0FBQ0EsV0FBS3BDLFFBQUwsR0FBZ0IseUJBQVMsS0FBS1EsSUFBZCxFQUFvQixVQUFwQixDQUFoQjtBQUNEOzs7NkJBQ1MsQ0FDVDs7OztFQXhDbUMsZUFBSzhCLFM7O2tCQUF0QnRDLFEiLCJmaWxlIjoiZGF0ZXRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgaW1wb3J0IHtkYXRlMnN0cn0gZnJvbSAnLi4vdXRpbHMvZGF0ZVRvU3RyJ1xyXG4gICBleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRldGltZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICBkYXRhID0ge1xyXG4gICAgICAgbW9udGg6IFtdLFxyXG4gICAgICAgZGF5OiBbXSxcclxuICAgICAgIGhvdXI6IFtdLFxyXG4gICAgICAgbWludXRlOiBbXSxcclxuICAgICAgIHllYXJzOiBbXSxcclxuICAgICAgIGZsYWc6IHRydWUsXHJcbiAgICAgICBkYXRlOiBudWxsLFxyXG4gICAgICAgdmFsdWU6IFswLCAxLCAxLCAnMDAnLCAnMDAnXSxcclxuICAgICAgIGRhdGV0aW1lOiBudWxsLFxyXG4gICAgICAgYW5pbWF0aW9uRGF0YToge31cclxuICAgICB9XHJcbiAgICAgcHJvcHMgPSB7XHJcbiAgICAgICBkYXRlT2JqOiBPYmplY3QsXHJcbiAgICAgICB0d29XYXk6IHRydWVcclxuICAgICB9XHJcbiAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgZm9yIChsZXQgbSA9IDE7IG0gPD0gMTI7IG0rKykge1xyXG4gICAgICAgICB2YXIgTSA9IG0gPCAxMCA/ICgwICsgJycgKyBtKSA6IG1cclxuICAgICAgICAgdGhpcy5tb250aC5wdXNoKE0pXHJcbiAgICAgICB9XHJcbiAgICAgICBmb3IgKGxldCBkID0gMTsgZCA8PSAzMTsgZCsrKSB7XHJcbiAgICAgICAgIHZhciBEID0gZCA8IDEwID8gKDAgKyAnJyArIGQpIDogZFxyXG4gICAgICAgICB0aGlzLmRheS5wdXNoKEQpXHJcbiAgICAgICB9XHJcbiAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IDI0OyBoKyspIHtcclxuICAgICAgICAgdmFyIEggPSBoIDwgMTAgPyAoMCArICcnICsgaCkgOiBoXHJcbiAgICAgICAgIHRoaXMuaG91ci5wdXNoKEgpXHJcbiAgICAgICB9XHJcbiAgICAgICBmb3IgKGxldCBtaW51dGUgPSAwOyBtaW51dGUgPCA2MDsgbWludXRlKyspIHtcclxuICAgICAgICAgdmFyIE1pbnV0ZSA9IG1pbnV0ZSA8IDEwID8gKDAgKyAnJyArIG1pbnV0ZSkgOiBtaW51dGVcclxuICAgICAgICAgdGhpcy5taW51dGUucHVzaChNaW51dGUpXHJcbiAgICAgICB9XHJcbiAgICAgICBsZXQgeWVhciA9IChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgdGhpcy55ZWFycyA9IFt5ZWFyLCB5ZWFyICsgMV1cclxuICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgIHRoaXMuZGF0ZXRpbWUgPSBkYXRlMnN0cih0aGlzLmRhdGUsICdkYXRldGltZScpXHJcbiAgICAgfVxyXG4gICAgIG9uU2hvdyAoKSB7XHJcbiAgICAgfVxyXG4gICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICBzZWxlY3RQaWNrZXIodHlwZSwgZGF0ZVR5cGUpIHtcclxuICAgICAgICAgdGhpcy5kYXRlT2JqLmZsYWcgPSBmYWxzZVxyXG4gICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdGVkRGF0ZScsIHR5cGUsIHRoaXMuZGF0ZU9iai50eXBlLCB0aGlzLmRhdGV0aW1lKVxyXG4gICAgICAgfSxcclxuICAgICAgIGJpbmRDaGFuZ2UoZSkge1xyXG4gICAgICAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgIHRoaXMuZGF0ZXRpbWUgPSB0aGlzLnllYXJzW3ZhbFswXV0gKyAnLycgKyB0aGlzLm1vbnRoW3ZhbFsxXV0gKyAnLycgKyB0aGlzLmRheVt2YWxbMl1dICsgJyAnICsgdGhpcy5ob3VyW3ZhbFszXV0gKyAnOicgKyB0aGlzLm1pbnV0ZVt2YWxbNF1dXHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiJdfQ==