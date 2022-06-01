const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.dirname(path.join(__dirname, 'Client')),

        filename: 'bundle.js'
    }
};