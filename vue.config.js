module.exports = {
  lintOnSave: false,


  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_breakpoints.scss";
          @import "@/assets/scss/_buttons.scss";
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_components.scss";
          @import "@/assets/scss/_forms.scss";
        `
      }
    }
  },
};