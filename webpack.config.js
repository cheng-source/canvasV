const path = require("path");

module.exports = {
    entry: './src/CV.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'CV.js'
    },

    module: {
        rules: [{
            test: /\.js$/i,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }]
        }]
    },

    plugins: [


    ],

    // devServer: {
    //     host: "localhost",
    //     port: "3000",
    //     open: true //是否自动打开浏览器
    // },

    mode: "development",
}