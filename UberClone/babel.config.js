module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ['GOOGLE_MAPS_APIKEY', 'KUSHAL', 'CHELSEA'],
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
