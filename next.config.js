// scss sources see https://github.com/zeit/next-plugins/tree/master/packages/next-source-maps
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const internalReactToolboxDeps = /react-toolbox(?!.*node_modules)/
const externalReactToolboxDeps = /node_modules(?!\/react-toolbox(?!.*node_modules))/

module.exports = withCSS(withSass({
    cssModules: false,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]__[hash:base64:5]',
    },
    webpack: (config, { dev, defaultLoaders }) => {
        config.resolve.symlinks = false;
        config.externals = config.externals || [];
        config.externals = config.externals.map(external => {
            if (typeof external !== 'function') return external;
            return (ctx, req, cb) => (internalReactToolboxDeps.test(req) ? cb() : external(ctx, req, cb))
        });
        config.module.rules.push({
            test: /\.jsx?$/,
            loader: defaultLoaders.babel,
            include: [internalReactToolboxDeps],
        });


        return config
    },
    webpackDevMiddleware: config => {
        const ignored = [config.watchOptions.ignored[0], externalReactToolboxDeps]
        config.watchOptions.ignored = ignored
        return config
    },
}));