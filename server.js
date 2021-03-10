// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Jason', organization: "iFusionX", birth_year: 2005},
        { name: 'Hatsune Miku', organization: "Best vocaloid girl", birth_year: 2004},
        { name: 'Asuna', organization: "No.1 Waifu", birth_year: 2001}
    ];
    var tagline = "2D>3D";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8081);
console.log('8081 is the magic port');