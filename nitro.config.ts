export default defineNitroConfig({
  routeRules: {
    '/img/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
});
