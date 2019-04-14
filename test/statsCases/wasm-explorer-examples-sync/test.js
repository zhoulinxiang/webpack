const webpack = require('/Users/zlx/Documents/bytedance/workbench/github/webpack/lib/index.js');
const config = require('./webpack.config');
const compiler = webpack(config);

compiler.run((err, stats) => {
    console.log('err:', err);
    // console.log('stats:', stats);
    // ...
});