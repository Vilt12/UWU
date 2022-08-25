const HtmlWebPack = require("html-webpack-plugin")



module.exports = {
    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    sources: false
                },
            },    
                {
                 test: /\.css$/,
                 use: ['styles-loader ', 'css-loader']
                },
          
        ]
    },

    optimization: {},



    plugins: [
        new HtmlWebPack({
            title: "Web Pack App",

            template: "./src/index.html"
        })
    ],
}
