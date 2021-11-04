var express = require('express');

const cors = require('cors');
var app = express();

var templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + ''); // + '/views'

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('css'));

app.use(cors({
    origin: '*'
}));

app.get('/', require('./cont/cont_list'));
app.get('/mainPage', require('./cont/mainPage'));
app.get('/moviePage1', require('./cont/moviePage1'));
app.get('/moviePage2', require('./cont/moviePage2'));
app.get('/tvSeriesPage1', require('./cont/seriesPage1'));
app.get('/tvSeriesPage2', require('./cont/seriesPage2'));

//moviesElement page1
app.get('/movie/Hamilton', require('./moviesElement/Hamilton'));
app.get('/movie/Lives_dogs', require('./moviesElement/Lives_dogs'));
app.get('/movie/The_shawshank_redemption', require('./moviesElement/The_Shawshank_Redemption'));
app.get('/movie/the_green_mile', require('./moviesElement/The_Green_Mile'));
app.get('/movie/not_dimon', require('./moviesElement/not_dimon'));

// //moviesElement page2
app.get('/movie/Smeshariki', require('./moviesElement/Smeshariki'));
app.get('/movie/Forrest_gump', require('./moviesElement/Forrest_gump'));
app.get('/movie/Armin', require('./moviesElement/Armin'));
app.get('/movie/queen', require('./moviesElement/queen'));
app.get('/movie/twelfth', require('./moviesElement/twelfth'));

// //tvSeries page1
app.get('/tvSeries/friends', require('./tvSeries/friends'));
app.get('/tvSeries/people', require('./tvSeries/people'));
app.get('/tvSeries/badComedian', require('./tvSeries/badComedian'));
app.get('/tvSeries/planet', require('./tvSeries/planet'));
app.get('/tvSeries/blue', require('./tvSeries/blue'));

// //tvSeries page2
app.get('/tvSeries/thrones', require('./tvSeries/thrones'));
app.get('/tvSeries/chernobyl', require('./tvSeries/chernobyl'));
app.get('/tvSeries/romanos', require('./tvSeries/romanos'));
app.get('/tvSeries/space', require('./tvSeries/space'));
app.get('/tvSeries/seven', require('./tvSeries/seven'));













app.listen(8090);
console.log('Express in port 8090');

