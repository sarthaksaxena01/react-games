var config = {
   entry: './main.js',
	
   output: {
      filename: './index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;