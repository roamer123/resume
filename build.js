'use strict';

const shell = require('shelljs');

shell.exec('cd client && yarn run build', null, function(){
  shell.rm('-rf', 'serve/app/public/*');
  shell.cp('-rf', 'client/dist/*', 'serve/app/public/');
})
