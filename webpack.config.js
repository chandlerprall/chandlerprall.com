module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['jsx-display-if', 'transform-object-rest-spread']
                }
            }
        ]
    },
    output: {
        filename: 'app.js',
        library: 'App',
        libraryTarget: 'umd'
    }
};