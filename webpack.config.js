const webpack = require("webpack");
const path = require("path");

module.exports = env => {
    let environment = env.ENV === "dev" ? "development" : "production";
    let service;
    switch (env.SERVICE) {
        case "mobx":
            service = "./mobx/index.js";
            break;
        default:
            service = "./redux/index.js";
            break;
    }
    return {
        entry: {
            "./dist/app": service
        },
        output: {
            path: path.resolve(__dirname, ""),
            filename: "[name].js"
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
        mode: environment,
        devtool:
            environment === "development" ? "eval-source-map" : "source-map",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ["babel-loader"],
                    include: path.resolve(__dirname, ""),
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    exclude: [/styles/, /mobx/, /redux/],
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                hmr: true
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2,
                                modules: true,
                                localIdentName:
                                    "[name]_[local]__[hash:base64:5]",
                                camelCase: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: ["./node_modules"]
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    include: [/styles/, /mobx/, /redux/],
                    use: [
                        {
                            loader: "style-loader",
                            options: {
                                hmr: true
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: ["./node_modules"]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: "url-loader?limit=100000"
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".html"],
            modules: ["node_modules"]
        },
        devServer: {
            publicPath: "/",
            contentBase: path.join(__dirname, ""),
            stats: "minimal",
            host: "localhost",
            port: "3000",
            open: true,
            hot: true,
            watchContentBase: true,
            historyApiFallback: {
                index: "index.html"
            }
        }
    };
};
