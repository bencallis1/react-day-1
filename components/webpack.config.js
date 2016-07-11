module.exports = {
    entry: "./app/App.js",
    output: {
        path:'/',
        filename: "public/bundle.js",
        libraryTarget: 'umd'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets:['es2015', 'react']
                }

            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
