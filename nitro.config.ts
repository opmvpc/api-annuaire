export default defineNitroConfig({
  routeRules: {
    '*': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
});
