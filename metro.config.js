const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
    resolver: {
        // Add custom resolver settings here
      },
      transformer: {
      },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
