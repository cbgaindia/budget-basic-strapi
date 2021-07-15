module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  url: env('STRAPI_API'),
  admin: {
    url: env('STRAPI_DASHBOARD'),
    auth: {
      secret: env('STRAPI_JWT_SECRET'),
    },
  },
});
