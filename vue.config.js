module.exports = {
    chainWebpack(config) {
        /**
         * resources
         * 1. https://github.com/webpack-contrib/style-loader
         * 2. https://www.cnblogs.com/webSciprt/p/ji-yuwebpack4vuecli3xiang-mu-de-huan-fu-gong-neng.html
         * 3. https://blog.csdn.net/crq131290x/article/details/103633111
         */
        const scss = config.module.rule('scss').toConfig();
        const useable = { ...scss.oneOf[3], test: /\.theme.scss$/ };
        useable.use = [...useable.use];
        useable.use[0] = { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } };
        config.module.rule('scss').merge({ oneOf: [useable] });
    }
}