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
app.get('/moviePage1', require('./cont/moviePage1'));
app.get('/moviePage2', require('./cont/moviePage2'));
app.get('/seriesPage1', require('./cont/seriesPage1'));
app.get('/seriesPage2', require('./cont/seriesPage2'));

//moviesElement page1
app.get('/Hamilton', require('./moviesElement/Hamilton'));
app.get('/Lives_dogs', require('./moviesElement/Lives_dogs'));
app.get('/The_shawshank_redemption', require('./moviesElement/The_Shawshank_Redemption'));
app.get('/the_green_mile', require('./moviesElement/The_Green_Mile'));
app.get('/not_dimon', require('./moviesElement/not_dimon'));

// //moviesElement page2
app.get('/Smeshariki', require('./moviesElement/Smeshariki'));
app.get('/Forrest_gump', require('./moviesElement/Forrest_gump'));
app.get('/Armin', require('./moviesElement/Armin'));
app.get('/queen', require('./moviesElement/queen'));
app.get('/twelfth', require('./moviesElement/twelfth'));

// //tvSeries page1
app.get('/friends', require('./tvSeries/friends'));
app.get('/people', require('./tvSeries/people'));
app.get('/badComedian', require('./tvSeries/badComedian'));
app.get('/planet', require('./tvSeries/planet'));
app.get('/blue', require('./tvSeries/blue'));

// //tvSeries page2
app.get('/thrones', require('./tvSeries/thrones'));
app.get('/chernobyl', require('./tvSeries/chernobyl'));
app.get('/romanos', require('./tvSeries/romanos'));
app.get('/space', require('./tvSeries/space'));
app.get('/seven', require('./tvSeries/seven'));













app.listen(8099);
console.log('Express in port 8099');

