import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as route from './routes/';

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

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome Audios - Messages, Books and Songs Platform',
}));

export default app;
