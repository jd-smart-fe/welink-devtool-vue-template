module.exports = {
  entry: {
    lib: ['vue', 'vuex', 'vue-resource', 'vue-router']
  },
  output: {
    filename: '[name].dll.js', // 动态链接库输出的文件名称
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    library: '[name]_library'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    /**
     * path: manifest.json输出文件路径
     * name: dll对象名，跟output.library保持一致
     */
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, '../dist/', '[name].manifest.json'),
      name: '[name]_library'
    })
  ]
}
