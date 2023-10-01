export default defineNitroConfig({
  publicAssets: [
    {
      baseURL: 'img',
      dir: 'public/img',
      maxAge: 60 * 60 * 24 * 7,
    },
  ],
});
