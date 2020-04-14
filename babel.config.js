module.exports = {
    presets: ["@babel/env"],
    plugins: [
        "@babel/proposal-object-rest-spread",
        "@babel/syntax-async-generators",
        "@babel/transform-async-to-generator",
        "@babel/plugin-proposal-class-properties"
    ]
};