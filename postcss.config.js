module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
    cssnano: {
      preset: "default",
    },
    '@csstools/postcss-oklab-function': {
        preserve: true,
    },
  },
};
