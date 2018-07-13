/*
 * @Author: lulu27753
 * @Date:   2018-04-16 15:00:30
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-11 09:54:42
 */
import axios from 'axios'
import {
  message
} from 'components'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

function checkStatus(response) {
  if (response.code >= 200 && response.code < 300) {
    return response;
  }
  const errorMsg = codeMessage[response.code] || response.statusText;
  message.warning(errorMsg, 2);

  const error = new Error(errorMsg);
  error.name = response.status;
  error.response = response;
  throw error;
}

function request(config, resolve, reject) {
  const newConfig = { ...config
  };
  if (newConfig.method === 'POST' || newConfig.method === 'PUT') {
    if (!(newConfig.body instanceof FormData)) {
      newConfig.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newConfig.headers,
      };
      newConfig.body = JSON.stringify(newConfig.body);
    } else {
      newConfig.headers = {
        Accept: 'application/json',
        ...newConfig.headers,
      };
    }
  }

  axios.request(newConfig)
    .then(checkStatus)
    .then(function (response) {
      const data = response.data
      if (data.resultCode === '000000') {
        typeof resolve === 'function' && resolve(data.data)
      } else {
        message.success(data.resultMesg);
        typeof reject === 'function' && reject(data.data);
      }
    }, function (response) {
      typeof reject === 'function' && reject(response);
    })
    .catch(function (error) {
      typeof reject === 'function' && reject(error);
    })
}

export default {
  get: (url, params, resolve, reject) => {
    request({
      method: 'GET',
      url,
      params
    }, resolve, reject)
  },
  post: (url, params, resolve, reject) => {
    request({
      method: 'POST',
      url,
      params
    }, resolve, reject)
  },
  request: (config, resolve, reject) => {
    request(config, resolve, reject)
  }
}
