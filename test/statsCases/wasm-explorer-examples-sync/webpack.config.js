module.exports = {
    mode: 'development',
    entry: './index',
    output: {
        filename: 'bundle.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                base: {
                    name: 'base',
                    // test: testCommonStyles,
					test: /.*(css|scss|sass|less)$/,
					filename: '[name].bundle.js',
                    chunks: 'all',
                    enforce: true
                }
            },
            minSize: {},
            maxSize: {
                webassembly: 500
            }
        }
    },
    stats: {
        chunks: true,
        chunkModules: true,
        modules: true
    }
};
