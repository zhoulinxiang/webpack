const webpack = require('/Users/zlx/Documents/bytedance/workbench/github/webpack/lib/index.js');
const config = require('/Users/zlx/Documents/bytedance/workbench/github/webpack/test/statsCases/wasm-explorer-examples-sync/webpack.config.js');
const compiler = webpack(config);

compiler.run((err, stats) => {
    console.log('err:', err);
    console.log('stats:', stats);
    // ...
});