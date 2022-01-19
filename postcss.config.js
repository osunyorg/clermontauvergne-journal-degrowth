// eslint-disable-next-line no-undef
module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './themes/**/*.html',
                'layouts/**/*.html'
            ],
            safelist: [
                'show',
                'active',
                'modal-backdrop',
                /^is-/,
                /^has-/,
                /^js-/
            ]
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    }
};
