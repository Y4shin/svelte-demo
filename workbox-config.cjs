module.exports = {
    globDirectory: 'build/',
    globPatterns: [
        '**/*.{css,js,json,html,png}'
    ],
    swDest: 'build/service-worker.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ]
};