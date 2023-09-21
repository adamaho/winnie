// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    extends: [
        "./base.js",
        "plugin:react/recommended",
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/react-in-jsx-scope": "off"
    }
}