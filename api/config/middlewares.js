console.log(process.env.CORS_ALLOW_ORIGIN, ' uirl')
module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      header: '*',
      origin: process.env.CORS_ALLOW_ORIGIN.split(',')
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
