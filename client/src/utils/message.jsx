import {
  message,
} from 'components'
export const successMsg = (msg) => {
  message.success(msg || '成功', 0.5);
};
export const errorMsg = (msg) => { // eslint-disable-line no-console
  message.error(msg || '失败', 0.5);
};
export const warningMsg = (msg) => {
  message.warning(msg || '警告', 0.8);
};
