module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['jsx-display-if', 'transform-object-rest-spread', `${__dirname}/gulptasks/encapsulateJsx`]
                }
            }
        ]
    },
    output: {
        filename: 'app.js',
        publicPath: '/static/',
        library: 'App',
        libraryTarget: 'umd'
    }
};