var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
      jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules:[
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname)
        ],
        alias:{
            Main:               path.resolve(__dirname, 'app/components/Main.jsx'),
            applicationStyles:  path.resolve(__dirname, 'app/styles/app.scss'),
            Main:               path.resolve(__dirname, 'app/components/Main.jsx'),
            Navigation:         path.resolve(__dirname, 'app/components/Navigation.jsx'),
            Timer:              path.resolve(__dirname, 'app/components/Timer.jsx'),
            Countdown:          path.resolve(__dirname, 'app/components/Countdown.jsx'),
            CountdownForm:      path.resolve(__dirname, 'app/components/CountdownForm.jsx'),
            Clock:              path.resolve(__dirname, 'app/components/Clock.jsx')

        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map '
};
