module.exports = {
    require: [
        "ts-node/register/transpile-only"
    ],
    recursive: true,
    reporter: "dot",
    spec: [
        "**/*.spec.ts"
    ]
};
