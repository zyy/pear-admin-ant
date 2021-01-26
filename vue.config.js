/**
 * webpack 配置（vue-cli提示的vue.config.js）
 * @type {{devServer: {port: number, open: boolean}}}
 */
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
const isDev = process.env.NODE_ENV === "development";
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ProductionGzipExtensions = ["html", "js", "css", "svg"];
module.exports = {
  publicPath: "",
  outputDir: "dist",
  devServer: {
    open: true, // 启动后自动打开浏览器
    port: 8080 // 端口
  },
  // 构建时开启多进程处理babel编译
  parallel: require("os").cpus().length > 1,
  configureWebpack(config) {
    //配置根目录
    return {
      resolve: {
        alias: {
          "@": resolve("src")
        }
      }
    };
  },
  chainWebpack(config) {
    config.when(!isDev, config => {
      //splitChunks拆分
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "Chunk-Libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial"
          },
          AntdUI: {
            name: "Chunk-Antd",
            priority: 20,
            test: /[\\/]node_modules[\\/]_?@ant-design(.*)/
          }
        }
      });
      //Gzip
      config
        .plugin("compression")
        .use(CompressionWebpackPlugin, [
          {
            filename: "[path][base].gz[query]",
            algorithm: "gzip",
            test: new RegExp(
              "\\.(" + ProductionGzipExtensions.join("|") + ")$"
            ),
            threshold: 8192,
            minRatio: 0.8
          }
        ])
        .end();
    });
  }
};
