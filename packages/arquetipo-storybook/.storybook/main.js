module.exports = {
    stories: ["../stories/**/*.stories.@(js|ts|mdx)", "../stories/**/**/*.stories.@(js|ts|mdx)"],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-notes",
        "@storybook/addon-knobs",
        '@storybook/addon-docs'
    ],
    core: {
      builder: 'webpack5',
    },
};
