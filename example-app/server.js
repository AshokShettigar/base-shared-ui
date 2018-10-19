const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../configs/webpack.config.example-app');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/sprites.svg', function(req, res) {
    res.sendFile(path.join(__dirname, '../node_modules/platform-common-assets/dist/sprites.svg'));
});

app.get('/hopscotch.min.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../hopscotch-lib/hopscotch.min.js'));
});

app.get('/hopscotch.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, '../hopscotch-lib/hopscotch.min.css'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
