const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        '0.index': './src/0.index.ts',
        '1.helloWord': './src/1.helloWord.ts',
        '2.funcDemo': './src/2.funcDemo.ts',
        '3.classDemo': './src/3.classDemo.ts',
        '4.interfaceDemo': './src/4.interfaceDemo.ts',
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            { 
                test: /\.js$/, 
                enforce: "pre",
                loader: "source-map-loader" 
            }
        ]
    }
};