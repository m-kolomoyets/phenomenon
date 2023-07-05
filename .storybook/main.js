const path = require('path');

module.exports = {
    stories: ['../packages/components/**/*.stories.tsx'],
    addons: ['@storybook/addon-storysource'],

    reactOptions: {
        strictMode: true,
    },

    // we need to add aliases to webpack so it knows how to follow
    // to the source of the packages rather than the built version (dist)
    webpackFinal: async (config) => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                ...convertTsConfigPathsToWebpackAliases(),
            },
        },
    }),
};

function convertTsConfigPathsToWebpackAliases() {
    const rootDir = path.resolve(__dirname, '../');
    const tsconfig = require('../tsconfig.json');
    const tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths);

    return tsconfigPaths.reduce((aliases, [realPath, mappedPath]) => {
        aliases[realPath] = path.join(rootDir, mappedPath[0]);
        return aliases;
    }, {});
}
