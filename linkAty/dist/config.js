'use strict';

var env = 'prod';
var hosts = {
  prod: 'https://www.laiqiyue.cn'
  // api
};var api = {
  user: {
    login: {
      method: 'POST',
      url: '/user/wxlogin'
    },
    info: {
      method: 'GET',
      url: '/user/info'
    }
  },
  activity: {
    list: {
      method: 'POST',
      url: '/activity/list'
    },
    publish: {
      method: 'POST',
      url: '/activity/publish'
    },
    upLoadImg: {
      method: 'POST',
      url: '/images/uploadImg'
    },
    likedUserUpdate: {
      method: 'POST',
      url: '/activity/likedUserUpdate'
    },
    joinRequest: {
      method: 'POST',
      url: '/activity/joinRequest'
    },
    activityDel: {
      method: 'POST',
      url: '/activity/delete'
    }
  },
  message: {
    list: {
      method: 'GET',
      url: '/message/list'
    },
    read: {
      method: 'POST',
      url: '/message/read'
    },
    messageDel: {
      method: 'POST',
      url: '/message/delete'
    },
    handRequestMsg: {
      method: 'POST',
      url: '/message/handRequestMsg'
    },
    chatSend: {
      method: 'POST',
      url: '/message/chatSend'
    }
  }

};
module.exports = {
  env: env,
  api: disposerUrl(api, hosts[env])
};

function disposerUrl(obj, prefix) {
  Object.keys(obj).forEach(function (v) {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url;
    } else {
      obj[v] = disposerUrl(obj[v], prefix);
    }
  });

  return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJob3N0cyIsInByb2QiLCJhcGkiLCJ1c2VyIiwibG9naW4iLCJtZXRob2QiLCJ1cmwiLCJpbmZvIiwiYWN0aXZpdHkiLCJsaXN0IiwicHVibGlzaCIsInVwTG9hZEltZyIsImxpa2VkVXNlclVwZGF0ZSIsImpvaW5SZXF1ZXN0IiwiYWN0aXZpdHlEZWwiLCJtZXNzYWdlIiwicmVhZCIsIm1lc3NhZ2VEZWwiLCJoYW5kUmVxdWVzdE1zZyIsImNoYXRTZW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsImRpc3Bvc2VyVXJsIiwib2JqIiwicHJlZml4IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU0sTUFBWjtBQUNBLElBQU1DLFFBQVE7QUFDWkMsUUFBTTtBQUVSO0FBSGMsQ0FBZCxDQUlBLElBQU1DLE1BQU07QUFDVkMsUUFBSztBQUNIQyxXQUFPO0FBQ0xDLGNBQVEsTUFESDtBQUVMQyxXQUFLO0FBRkEsS0FESjtBQUtIQyxVQUFNO0FBQ0xGLGNBQVEsS0FESDtBQUVMQyxXQUFLO0FBRkE7QUFMSCxHQURLO0FBV1ZFLFlBQVU7QUFDUkMsVUFBTTtBQUNKSixjQUFRLE1BREo7QUFFSkMsV0FBSztBQUZELEtBREU7QUFLUkksYUFBUztBQUNQTCxjQUFRLE1BREQ7QUFFUEMsV0FBSztBQUZFLEtBTEQ7QUFTUkssZUFBVztBQUNUTixjQUFRLE1BREM7QUFFVEMsV0FBSztBQUZJLEtBVEg7QUFhUk0scUJBQWlCO0FBQ2ZQLGNBQVEsTUFETztBQUVmQyxXQUFLO0FBRlUsS0FiVDtBQWlCUk8saUJBQWE7QUFDWFIsY0FBUSxNQURHO0FBRVhDLFdBQUs7QUFGTSxLQWpCTDtBQXFCUlEsaUJBQWE7QUFDWFQsY0FBUSxNQURHO0FBRVhDLFdBQUs7QUFGTTtBQXJCTCxHQVhBO0FBcUNWUyxXQUFTO0FBQ1BOLFVBQU07QUFDSkosY0FBUSxLQURKO0FBRUpDLFdBQUs7QUFGRCxLQURDO0FBS1BVLFVBQU07QUFDSlgsY0FBUSxNQURKO0FBRUpDLFdBQUs7QUFGRCxLQUxDO0FBU1BXLGdCQUFZO0FBQ1ZaLGNBQVEsTUFERTtBQUVWQyxXQUFLO0FBRkssS0FUTDtBQWFQWSxvQkFBZ0I7QUFDZGIsY0FBUSxNQURNO0FBRWRDLFdBQUs7QUFGUyxLQWJUO0FBaUJQYSxjQUFVO0FBQ1JkLGNBQVEsTUFEQTtBQUVSQyxXQUFLO0FBRkc7QUFqQkg7O0FBckNDLENBQVo7QUE2REFjLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnRCLFVBRGU7QUFFZkcsT0FBS29CLFlBQVlwQixHQUFaLEVBQWdCRixNQUFNRCxHQUFOLENBQWhCO0FBRlUsQ0FBakI7O0FBS0EsU0FBU3VCLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxNQUExQixFQUFrQztBQUNoQ0MsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUEwQixhQUFLO0FBQzdCLFFBQUdKLElBQUlLLENBQUosRUFBT3RCLEdBQVYsRUFBZTtBQUNiaUIsVUFBSUssQ0FBSixFQUFPdEIsR0FBUCxHQUFha0IsU0FBU0QsSUFBSUssQ0FBSixFQUFPdEIsR0FBN0I7QUFDRCxLQUZELE1BRU87QUFDTGlCLFVBQUlLLENBQUosSUFBU04sWUFBWUMsSUFBSUssQ0FBSixDQUFaLEVBQW9CSixNQUFwQixDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFNBQU9ELEdBQVA7QUFDRCIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSAncHJvZCdcclxuY29uc3QgaG9zdHMgPSB7XHJcbiAgcHJvZDogJ2h0dHBzOi8vd3d3LmxhaXFpeXVlLmNuJ1xyXG59XHJcbi8vIGFwaVxyXG5jb25zdCBhcGkgPSB7XHJcbiAgdXNlcjp7XHJcbiAgICBsb2dpbjoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL3VzZXIvd3hsb2dpbidcdFxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICBcdCAgbWV0aG9kOiAnR0VUJyxcclxuICBcdCAgdXJsOiAnL3VzZXIvaW5mbydcclxuICAgICB9XHJcbiAgfSxcclxuICBhY3Rpdml0eToge1xyXG4gICAgbGlzdDoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2xpc3QnXHJcbiAgICB9LFxyXG4gICAgcHVibGlzaDoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L3B1Ymxpc2gnXHJcbiAgICB9LFxyXG4gICAgdXBMb2FkSW1nOiB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvaW1hZ2VzL3VwbG9hZEltZydcclxuICAgIH0sXHJcbiAgICBsaWtlZFVzZXJVcGRhdGU6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9saWtlZFVzZXJVcGRhdGUnXHJcbiAgICB9LFxyXG4gICAgam9pblJlcXVlc3Q6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9hY3Rpdml0eS9qb2luUmVxdWVzdCdcclxuICAgIH0sXHJcbiAgICBhY3Rpdml0eURlbDoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FjdGl2aXR5L2RlbGV0ZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIGxpc3Q6IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL21lc3NhZ2UvbGlzdCdcclxuICAgIH0sXHJcbiAgICByZWFkOiB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvbWVzc2FnZS9yZWFkJ1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VEZWw6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9tZXNzYWdlL2RlbGV0ZSdcclxuICAgIH0sXHJcbiAgICBoYW5kUmVxdWVzdE1zZzoge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL21lc3NhZ2UvaGFuZFJlcXVlc3RNc2cnXHJcbiAgICB9LFxyXG4gICAgY2hhdFNlbmQ6IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9tZXNzYWdlL2NoYXRTZW5kJ1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBlbnYsXHJcbiAgYXBpOiBkaXNwb3NlclVybChhcGksaG9zdHNbZW52XSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcG9zZXJVcmwob2JqLCBwcmVmaXgpIHtcclxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goIHYgPT4ge1xyXG4gICAgaWYob2JqW3ZdLnVybCkge1xyXG4gICAgICBvYmpbdl0udXJsID0gcHJlZml4ICsgb2JqW3ZdLnVybFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqW3ZdID0gZGlzcG9zZXJVcmwob2JqW3ZdLCBwcmVmaXgpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIG9ialxyXG59Il19