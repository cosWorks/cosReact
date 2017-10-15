const webpack = require('webpack')

module.exports = {
    entry: {
        client: './app/startApp.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ],
                    plugins: ['transform-react-jsx', 'transform-object-rest-spread', 'transform-runtime']
                }
            }
        ]
    },
    output: {
        path: 'C:\\workspaces\\cosReact\\app\\htdocs',
        filename: '[name].bundle.js'
    }
};