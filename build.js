'use strict';

const shell = require('shelljs');

shell.exec('cd client && yarn run build', null, function(){
  shell.mv('-n', 'client/dist', 'serve/app/public');
})
