const basePath = "./src/";
const wpPath = basePath + "webparts/";

module.exports = {
    devtool: "source-map",
    entry: {
        home: wpPath + "home.ts",
    },
    mode: "production",
    module: {
        rules: [
            // Typescript
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json" ]
    },
    stats: {
        assets: false,
        colors: true
    }
};
