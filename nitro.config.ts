export default defineNitroConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
  publicAssets: [
    {
      baseURL: 'img',
      dir: 'public/img',
      maxAge: 60 * 60 * 24 * 7,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  ],
});
