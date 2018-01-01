var LessPluginFunctions = require('less-plugin-functions')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
module.exports = {
    less: {
        plugins: [
            new LessPluginFunctions(),
            new LessPluginAutoPrefix({
                browsers: ["not ie < 9"]
            })
        ]
    },
    babel: {
        presets: [
            "es2015"
        ],
        plugins: [
            [
               "transform-react-jsx",
               {"pragma": "require(\"react\").createElement"}
            ],
            "transform-flow-strip-types",
            "syntax-flow",
            "syntax-jsx",
            "transform-react-display-name",
            "transform-decorators-legacy",
            "transform-class-properties"
        ]
    }
}
