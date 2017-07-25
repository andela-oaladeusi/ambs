import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as route from './routes/';
import request from 'request';

const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/roles', route.RoleRoute);
app.use('/api/v1/users', route.UserRoute);
app.use('/api/v1/types', route.TypeRoute);
app.use('/api/v1/artists', route.ArtistRoute);
app.use('/api/v1/songs', route.SongRoute);
app.use('/api/v1/categories', route.CategoryRoute);
app.use('/api/v1/lyrics', route.LyricRoute);
app.use('/api/v1/albums', route.AlbumRoute);
app.use('/api/v1/favourites', route.FavouriteRoute);
app.use('/api/v1/auth', route.AuthRoute);

// app.post('/api/v1/auth/login', (req, res) => {
//   request(`https://graph.facebook.com/v2.10/oauth/access_token?client_id=1892375284373018&redirect_uri=http://localhost:3000/&client_secret=4b6fbb82c51a9e6743f7c0d12a2d5e1e&code=${req.query.code}`,(err, res, body) => {
//     console.log('ACCESS TOKEN=', JSON.parse(body));
//     const token11 = JSON.parse(body);
//     const token = token11.access_token || ''
//     console.log(token);
//     // request(`GET graph.facebook.com/debug_token?input_token=${token}&access_token=1892375284373018|4b6fbb82c51a9e6743f7c0d12a2d5e1e`,(err, res, body1) => {
//     //   console.log('USER DATA = ', body1);
//     // })
//   })
// });

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome Audios - Messages, Books and Songs Platform',
}));

export default app;
