const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env, argv) {
	const isProd = argv.mode === 'production';

	return {
		devtool: isProd ? 'source-map' : 'cheap-module-source-map',
		context: path.resolve(__dirname, './src/'),
		entry: './index.js',
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
		},
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
		module: {
			rules: [
				{
					test: /\.js/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				}
			]
		},
		plugins: [
			new BundleAnalyzerPlugin({
				analyzerMode: isProd ? 'static' : 'disabled',
				openAnalyzer: true,
				reportFilename: './bundle-report.html'
			})
		]
	};
};
