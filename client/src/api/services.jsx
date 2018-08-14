/*
 * @Author: lulu27753
 * @Date:   2018-04-16 15:00:30
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-11 09:54:42
 */
import axios from 'axios';
import qs from 'qs';

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
// let Authorization = '';
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errorMsg = codeMessage[response.status] || response.statusText;
  message.warning(errorMsg, 2);

  const error = new Error(errorMsg);
  error.name = response.status;
  error.response = response;
  throw error;
}

const request = (config, resolve, reject) => {
  const newConfig = { ...config
  };
  newConfig.headers = {
    Accept: 'application/json',
    'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    ...newConfig.headers,
  };

  axios.request(newConfig)
    .then(checkStatus)
    .then((response) => {
      const data = response.data
      if (data.resultCode === '000000') {
        typeof resolve === 'function' && resolve(data.data)
      } else {
        message.success(data.resultMesg, 0.5);
        typeof reject === 'function' && reject(data.data);
      }
    }, (response) => {
      typeof reject === 'function' && reject(response);
    })
    .catch((error) => {
      typeof reject === 'function' && reject(error);
    })
}

export default {
  get: (url, params, resolve, reject) => {
    request({
      method: 'GET',
      url,
      withCredentials: true,
      crossDomain: true,
      params
    }, resolve, reject)
  },
  post: (url, data, resolve, reject) => {
    const qsData = qs.stringify(data)
    request({
      method: 'POST',
      url,
      withCredentials: true,
      crossDomain: true,
      data: qsData,
    }, resolve, reject)
  },
  request: (config, resolve, reject) => {
    request(config, resolve, reject)
  }
}
