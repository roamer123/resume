'use strict';
const moment = require('moment');

module.exports = () => {
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
        const user = await this.ctx.model.User.getUser(username, password);
        if (!user) throw new Error('user is not found');
        return user;
      } catch (err) {
        console.log('error', err);
        return;
      }
    }

    async saveToken(token, client, user) {
      try {
        console.log('saveToken invoked...');
        await this.ctx.model.User.updateUser(
          {
            ACCESS_TOKEN: token.accessToken,
            EXPIRES: moment(token.accessTokenExpiresAt).format('YYYY-MM-DD HH:mm:ss'),
          },
          {
            ID: user.ID,
          }
        );
        return {
          accessToken: token.accessToken,
          accessTokenExpiresAt: token.accessTokenExpiresAt,
          client: { id: client.clientId },
          user,
          resultCode: '000000',
          resultMesg: '请求成功',
          data: {
            ORGANIZATION_CODE: user.ORGANIZATION_CODE,
          },
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
        const user = this.ctx.model.User.queryUser({
          ACCESS_TOKEN: bearerToken,
        });
        if (!user) return;
        const token = {};
        token.user = user;
        token.client = {
          clientId: 'my-app',
          clientSecret: 'my-secret',
          grants: [ 'password' ],
        };
        token.accessTokenExpiresAt = new Date(user.EXPIRES);
        token.refreshTokenExpiresAt = new Date(user.EXPIRES);
        console.log('token', token);
        return token;
      } catch (err) {
        return;
      }
    }

    // async saveAccessToken(token, client, user) {
    //   try {
    //     console.log('saveAccessToken invoked.....');
    //     return {
    //       accessToken: token.accessToken,
    //       accessTokenExpiresAt: token.accessTokenExpiresAt,
    //       refreshToken: token.refreshToken,
    //       refreshTokenExpiresAt: token.refreshTokenExpiresAt,
    //       client: { id: client.id },
    //       user,
    //     };
    //   } catch (err) {
    //     return;
    //   }
    // }
  }
  return Model;
};
