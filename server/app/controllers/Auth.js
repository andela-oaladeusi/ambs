import db from '../models'
import request from 'request';
import google from 'googleapis';

const facebookClientId = '1892375284373018';
const facebookRedirectUrl = 'http://localhost:3000/';
const facebookClientSecret = '4b6fbb82c51a9e6743f7c0d12a2d5e1e';
const facebookGetTokenUrl = 'https://graph.facebook.com/v2.10/oauth/access_token';

const googleClientId = '94299773001-q0r47o4114hpnrqjq8tglkuv4oshmehp.apps.googleusercontent.com';
const googleClientSecret = 'IpvYlR-CadEftkiBG56jwhN5'
const googleRedirectUrl = 'http://localhost:3000';

const OAuth2 = google.auth.OAuth2;


const UserAuth = {
  authenticateUser(req, res) {
    const code = req.query.code || '';
    if (req.query.auth_type === 'facebook') {
      UserAuth.fetchFacebookInfo(req, res);
    } else if (req.query.auth_type === 'google') {
      UserAuth.fetchGoogleInfo(req, res);
    } else {

    }
  },
  getOauthClient() {
    return new OAuth2(googleClientId, googleClientSecret, googleRedirectUrl);
  },
  googleToken(req, res) {
    return new Promise((resolve, reject) => {
      UserAuth.getOauthClient().getToken(req.query.code, (err, tokens, response) => {
        return err ? reject(response.body) : resolve(tokens);
      });
    });
  },
  getGoogleUserInfo(tokens) {
    const oauth2 = google.oauth2('v2');
    const authAccess = UserAuth.getOauthClient();
    authAccess.setCredentials({ access_token: tokens.access_token });
    return new Promise((resolve, reject) => {
      oauth2.userinfo.get({ auth: authAccess }, (err, data) => {
        return err ? reject(err) : resolve(data);
      });
    });
  },
  fetchGoogleInfo(req, res) {
    UserAuth.googleToken(req, res).then((tokens, err) => {
      UserAuth.getGoogleUserInfo(tokens).then((user, error) => {
        res.send(user);
      });
    });
  },

  fetchFacebookInfo(req, res) {
    if (!!req.query.code === false) {
      return res.send('no code');
    }
    UserAuth.getFacebookToken(req, res).then((data, err) => {
      if (!data.access_token) {
        return res.send('expired token');
      }
      UserAuth.decodeFacebookToken(data.access_token).then((decodedToken, error) => {
        UserAuth.getFacebookUserInfo(decodedToken).then((user, errors) => {
          console.log(user.name, ' infor retrieved from facebook successfully');
          return res.send(user);
        });
      })
    });
  },

  getFacebookToken(req, res) {
    return new Promise((resolve, reject) => {
      request(`${facebookGetTokenUrl}?client_id=${facebookClientId}&redirect_uri=${facebookRedirectUrl}&client_secret=${facebookClientSecret}&code=${req.query.code}`, (err, response, body) => {
        const responseData = JSON.parse(body);
        return err ? reject(err) : resolve(responseData);
      });
    });
  },

  decodeFacebookToken(accessToken) {
    return new Promise((resolve, reject) => {
      request(`https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${facebookClientId}|${facebookClientSecret}`, (err, response, body) => {
        const responseData = JSON.parse(body);
        return err ? reject(err) : resolve(responseData);
      });
    });
  },

  getFacebookUserInfo(decodedToken) {
    return new Promise((resolve, reject) => {
      request(`https://graph.facebook.com/${decodedToken.data.user_id}?access_token=${facebookClientId}|${facebookClientSecret}&fields=id,name,first_name,last_name,picture,email`, (err, response, body) => {
        const user = JSON.parse(body);
        return err ? reject(err) : resolve(user);
      });
    });
  }
}

export default UserAuth;
