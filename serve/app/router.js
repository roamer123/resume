'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/user')(app);
  require('./router/uploader')(app);
  require('./router/resume')(app);
  require('./router/position')(app);
  require('./router/interview')(app);
  require('./router/common')(app);
  require('./router/candidate')(app);
  require('./router/calender')(app);
};
