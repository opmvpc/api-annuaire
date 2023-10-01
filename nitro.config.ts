export default defineNitroConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
});
