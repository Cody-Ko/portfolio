// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// const { defineConfig } = require('@vue/cli-service');
// const { DefinePlugin } = require('webpack');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//     plugins: [
//       new DefinePlugin({
//         __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
//       }),
//     ],
//   },
// });
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
};
