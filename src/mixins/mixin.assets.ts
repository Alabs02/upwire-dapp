const MixinAssets = {
  methods: {
    staticAsset(fileName: string) {
      return require(`@/assets/static/${fileName}`);
    },
  },
};

export { MixinAssets };