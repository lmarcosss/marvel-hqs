module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': './src/ui/components',
          '@screens': './src/ui/screens',
          '@types': './src/types',
          '@core': './src/core',
          '@api': './src/api',
          '@routes': './src/routes.tsx',
          '@enums': './src/enums',
          '@images': './src/assets/images',
          '@hooks': './src/hooks',
        },
      },
    ],
    'jest-hoist',
  ],
};
