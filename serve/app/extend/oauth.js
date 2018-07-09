'use strict';
const moment = require('moment');

module.exports = app => {
  class Model {
    constructor(ctx) {
      this.ctx = ctx;
    }

    async getClient(clientId, clientSecret) {
      try {
        console.log('getClient invoked...');
        if (clientId === 'my_app' && clientSecret === 'my_secret') {
          return {
            clientId,
            clientSecret,
            grants: [ 'password' ],
          };
        }
        return;

      } catch (err) {
        return;
      }
    }

    async getUser(username, password) {
      try {
        console.log('getUser invoked.....');
        const user = await app.mysql.select('USER', {
          where: {
            USER_NAME: username,
          },
        });

        console.log('user.PASSWORD', user[0].PASSWORD);
        if (password === user[0].PASSWORD) {
          return user[0];
        }
        return;
      } catch (err) {
        return;
      }
    }

    async saveToken(token, client, user) {
      try {
        console.log('saveToken invoked...');
        app.mysql.update(
          'USER',
          {
            ACCESS_TOKEN: token.accessToken,
            EXPIRES: moment(token.accessTokenExpiresAt).format('YYYY-MM-DD HH:mm:ss'),
          },
          {
            where: {
              ID: user.ID,
            },
          }
        );
        return {
          accessToken: token.accessToken,
          accessTokenExpiresAt: token.accessTokenExpiresAt,
          client: { id: client.clientId },
          user,
        };

      } catch (err) {
        return;
      }
    }

    async grantTypeAllowed(clientId, grantType) {
      try {
        console.log('grantTypeAllowed invoked.....');
        let allowed = false;
        if (grantType === 'password' && clientId === 'my_app') {
          allowed = true;
        }

        return {
          allowed,
        };
      } catch (err) {
        return;
      }
    }

    async getAccessToken(bearerToken) {
      try {
        console.log('getAccessToken invoked.....');
        const data = await app.mysql.select('USER', {
          where: {
            ACCESS_TOKEN: bearerToken,
          },
        });
        console.log('user', data[0]);
        if (!data) return;
        const token = {};
        const user = { name: data[0].USER_NAME, id: data[0].ID };
        token.user = user;
        token.client = {
          clientId: 'my-app',
          clientSecret: 'my-secret',
          grants: [ 'password' ],
        };
        token.accessTokenExpiresAt = new Date(data[0].EXPIRES);
        token.refreshTokenExpiresAt = new Date(data[0].EXPIRES);
        console.log('token', token);
        return token;
      } catch (err) {
        return;
      }
    }

    async saveAccessToken(token, client, user) {
      try {
        console.log('saveAccessToken invoked.....');
        return {
          accessToken: token.accessToken,
          accessTokenExpiresAt: token.accessTokenExpiresAt,
          refreshToken: token.refreshToken,
          refreshTokenExpiresAt: token.refreshTokenExpiresAt,
          client: { id: client.id },
          user,
        };
      } catch (err) {
        return;
      }
    }
  }
  return Model;
};
